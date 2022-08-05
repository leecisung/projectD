var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bcrypt = require('bcrypt')
const cors = require('cors');

var indexRouter = require('./src/routes/index');

// 내가 집어넣은 부분 (다음 한줄)
var boardRouter = require("./src/routes/user_info")
var chatroomRouter = require("./src/routes/chatroom")
var usersRouter = require('./src/routes/users')
var profileRouter = require("./src/routes/profile")

var app = express();


// 내가 집어넣은 부분 시작
var mysql = require("mysql2")
var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '1234',
  database : 'blockchain'
})

connection.connect(function(err){
  if (err) {
    console.error('mysql connection error')
    console.error(err)
    throw err
  }
})
//내가 집어넣은 부분 끝



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true
}
app.use(cors(corsOptions));

app.use('/', indexRouter);

// 내가 집어넣은 부분(다음 한줄)
app.use('/api/board', boardRouter)
app.use('/api/chat', chatroomRouter)
app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//test
var moviesRouter = require('./src/routes/movies');
const { off } = require('process');
app.use('/api/movies', moviesRouter);

module.exports = app;
