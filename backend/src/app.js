const express = require('express');
const cors = require('cors');
const router = require('./router');

const corsOptions = {
     origin: 'https://eshop-ochre.vercel.app',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization'],
     credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://eshop-ochre.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(router);

module.exports = app;
