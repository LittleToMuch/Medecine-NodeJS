var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');
var history = require('connect-history-api-fallback');
//------------------连接数据库--------------------
var mongoose = require('mongoose');
mongoose.connect("mongodb://114.215.136.99:27017/medicine");

var db = mongoose.connection;
db.once('open', () => {
  console.log("连接成功")
});
db.once('close', () => {
  console.log("数据库断开成功");
});

//------------------连接数据库--------------------

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var tokenRouter = require('./routes/token');
var doctorRouter = require('./routes/doctor');
var docSwiperRouter = require('./routes/docSwiper');
var shopRouter = require('./routes/shop');
var questionRouter = require('./routes/question');
var cartRouter = require('./routes/cart');
var feedbackRouter = require('./routes/feedback');
var commentRouter = require('./routes/comment')

var docusersRouter = require("./routes/docusers");
var docloginRouter = require("./routes/doclogin");
var doctokenRouter = require("./routes/doctoken");
var docpatientRouter = require("./routes/docpatient");

var app = express();



app.use(
  "/zixun",
  proxy({
    target: "https://www.zk120.com",
    changeOrigin:true
  })
)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/login',loginRouter);
app.use('/api/register',registerRouter);
app.use('/api/token',tokenRouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/docSwiper',docSwiperRouter);
app.use('/api/shop',shopRouter);
app.use('/api/question',questionRouter);
app.use('/api/cart',cartRouter);
app.use('/api/feedback',feedbackRouter);
app.use('/api/comment',commentRouter);

app.use("/bpi/users", docusersRouter);
app.use("/bpi/login", docloginRouter);
app.use("/bpi/token", doctokenRouter);
app.use("/bpi/patient", docpatientRouter);

app.use(history());

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

module.exports = app;
