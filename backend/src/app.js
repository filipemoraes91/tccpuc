const express = require('express');
const cors = require('cors');

const router = require('./router');

const corsOptions = {
     origin: 'https://tccbuild-filipepmoraes91s-projects.vercel.app/', // Substitua pelo URL do seu frontend
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization'],
     credentials: true, // Se você precisa passar cookies ou autenticação
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

module.exports = app;
