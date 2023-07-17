import express from 'express';
import { router } from './routes';
import 'dotenv/config';

const server = express(); //instancia basica do servidor


server.use(express.json());
server.use (router); //"avisando" server para fazer uso das rotas definidas.




export { server };


/**
 
const sequelize = require('./infra/Sequelize');
const http = require('http');
const https = require('https');
const path = require("path");
const fs = require('fs');
const set_env = require('./env/set_env');
const dotenv = require('dotenv').config({ path: `./env/${set_env.set}.env` });
const app = require('./app');
const mongoose = require("mongoose");
app.server = http.createServer(app);

sequelize.connection
  .authenticate()
  .then(() => {
    console.log('Connection at database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Mongo connect
mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection at mongoDb has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to mongoDb to the database:', err);
  });

app.server.listen(process.env.PORT, () => {
  console.log(`protocol http (local) on port ${app.server.address().port} / env: ${process.env.ENV_NAME}`);
});

  
 */





/**
 
PACKAGE JSOn

{
  "name": "api-health-report",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "start:dev": "nodemon server.js"
  },
  "dependencies": {
    "amqplib": "^0.10.3",
    "dotenv": "^8.1.0",
    "express": "^4.17.1",
    "joi": "^14.3.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.9.0",
    "pg": "^8.5.1",
    "sequelize": "5.15.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.13"
  },
  "author": "",
  "license": "ISC"
}
 
 */


/*
controller

getById = catchAsync(async (req, res) => {
  const { params, userLogged } = req;
  let { id } = params;

  const filter = await ReportResultHelper.getFilter(userLogged, id);
  var data = await ReportResultHelper.getReportResultById(filter);

  const response = await ReportResultHelper.getByIdResponse(data);

  res.status(200).json({
    data: response
  });
});

create = catchAsync(async (req, res) => {
  const { body, userLogged } = req;
  await new ReportValidation().validate(body);

  if (!body.valid) {
    throw new ValidationError(body.errors);
  }

  const model = await ReportHelper.getModel(body, userLogged);
  const data = await Report.insert(model);
  await ReportResultHelper.saveReportResult(data);
  const response = await ReportHelper.getCreateResponse(data);
  // TODO: put this in a transaction (only after the launch)
  await ReportStatus.insert({reportId:data.id, statusId:1, createdBy:data.createdBy})
  await RabbitMQHelper.sendMessage({id:data.uuid},'report_created');

  res.status(201).json({
    data: response
  });
});
*/
