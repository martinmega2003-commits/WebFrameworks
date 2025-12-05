var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');

require('./app_server/models/db');
require('./app_server/models/users'); // zajistí načtení User modelu

var indexRouter = require('./app_server/routes/index');

var app = express();

// ===== PASSPORT + USER NASTAVENÍ =====
const User = mongoose.model('User');

passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===== CORS pro /api =====
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://tvuj-frontend.onrender.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// ===== VIEW ENGINE =====
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ===== ZÁKLADNÍ MIDDLEWARE =====
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ===== SESSION + PASSPORT MIDDLEWARE =====
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { sameSite: 'lax', secure: false }
}));


app.use(passport.initialize());
app.use(passport.session());

// ===== ROUTES =====
app.use('/', indexRouter);

// ===== 404 HANDLER =====
app.use(function(req, res, next) {
  next(createError(404));
});

// ===== ERROR HANDLER =====
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
