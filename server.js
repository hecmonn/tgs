import express from 'express';
import ssl from 'express-ssl';
import {serverConf} from './config';
import bodyParser from 'body-parser';
import apiRouter from './api';

const app=express();
app.use(ssl());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',apiRouter);

const server=app.listen(serverConf.port,serverConf.host,()=>{
    let port=serverConf.port;
    let host=serverConf.host;
    console.log('Magic happening at %s:%s',host,port);
});
