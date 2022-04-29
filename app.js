var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var createError = require('http-errors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts')

var app = express();

// Database setting
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/week3_Post')
    .then(res => console.log("DB connect success"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(function (req, res, next) {
    next(createError(404,"This page doesn't exit."))
})

module.exports = app;
