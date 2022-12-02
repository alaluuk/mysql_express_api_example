var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const basicAuth = require('express-basic-auth');


var bookRouter = require('./routes/book');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

var app = express();
const dotenv = require('dotenv');
dotenv.config();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//not protected
app.use('/login', loginRouter);

//protected routes
//app.use(authenticateToken);
app.use('/book', bookRouter);
app.use('/user', userRouter);


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }


module.exports = app;
