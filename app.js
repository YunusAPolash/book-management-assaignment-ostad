const express = require('express');
const app = new express();
const cors = require('cors');
const {readdirSync} = require('fs');
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config({path: './.env'})

// Securitey Middleware Import
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const xssClean = require('xss-clean');
const hpp = require('hpp');


// Securites Middleware Implements
app.use(cors());
app.use(helmet());
app.use(morgan('dev'))
app.use(xssClean());
app.use(hpp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Request Limit 
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
});
app.use(rateLimit());

// routes middleware
readdirSync("./src/routes").map(r => app.use("/api/v1", require(`./src/routes/${r}`))) 

// Undifine Route Handler
app.use('*',function(req, res){
    res.status(404).json({messages: "404 | Page Not Found"});
});

module.exports = app;