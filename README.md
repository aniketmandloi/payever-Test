<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Overview

Hello, i tried my best to complete the most of the requirements of the Test but there are some of the things I really could'nt complete in 4 hours but here's the code which I have written. There are still some errors here as I am really new to Nest.js but I tried my best to implement the setup of the Rest.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- Node.js and npm (Node Package Manager): [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- RabbitMQ: [Download and Install RabbitMQ](https://www.rabbitmq.com/download.html)

## Getting Started

- Navigate to the project directory:

  ```bash
  cd payover-Test
  ```

## Installation

```bash
$ npm install
```

## RabbitMQ Setup

- Install RabbitMQ: [RabbitMQ](https://www.rabbitmq.com/docs/download#installation-guides).
- Insure it is running Locally on standard Port: `brew services start rabbitmq`.

## MongoDB Setup

- Make sure your MongoDB server is running.

  - Go into your MongoDB cloud clusters.
  - Click on the `Database Access`, which is on the left of the sidebar. Click on `ADD NEW DATABASE USER` which will pop up a modal
  - Fill out the `Password Authentication` with your desired username and password for the database of this particular project.
  - Before saving this, click the `Built-in Role` dropdown, and select `Read and write to any database`.
  - Click on `Database`, and on the left side of the sidebar, click the `connect` button, which is beside View Monitoring. A modal popup will be displayed, then click `connect your application` and copy the code snippet you find there.
  - Create a `.env` file in the `server` directory.

    - Add the following variables to the `.env` file:

      ```env
      PORT=4000
      MONGODB_URL=<url you will copy from the cluster popup>
      ```

      Adjust the `PORT` and `MONGODB_URL` values as needed.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
