import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();
    // Send email and rabbit event (dummy)
    await this.rabbitMQService.sendEvent('user.created', createdUser);
    console.log('Email and RabbitMQ event sent');
    return createdUser;
  }

  async findById(userId: string): Promise<any> {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    return response.data;
  }

  async findAvatarById(userId: string): Promise<string> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const avatarPath = path.join(
      __dirname,
      '..',
      '..',
      'avatars',
      `${userId}.png`,
    );
    if (fs.existsSync(avatarPath)) {
      return fs.readFileSync(avatarPath).toString('base64');
    } else {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      const avatarUrl = response.data.data.avatar;
      const avatarResponse = await axios.get(avatarUrl, {
        responseType: 'arraybuffer',
      });
      fs.writeFileSync(avatarPath, avatarResponse.data);
      const avatarHash = crypto
        .createHash('md5')
        .update(avatarResponse.data)
        .digest('hex');
      user.avatarHash = avatarHash;
      await user.save();
      return avatarResponse.data.toString('base64');
    }
  }

  async deleteAvatar(userId: string): Promise<void> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const avatarPath = path.join(
      __dirname,
      '..',
      '..',
      'avatars',
      `${userId}.png`,
    );
    if (fs.existsSync(avatarPath)) {
      fs.unlinkSync(avatarPath);
    }
    user.avatarHash = null;
    await user.save();
  }
}
