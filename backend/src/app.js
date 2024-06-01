const express = require('express');
const cors = require('cors');

const router = require('./router');

const corsOptions = {
     origin: 'http://localhost:3000/', // Substitua pelo URL do seu frontend
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization'],
     credentials: false, // Se você precisa passar cookies ou autenticação
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

module.exports = app;
