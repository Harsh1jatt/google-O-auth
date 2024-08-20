const express = require('express');
const app = express();
require('dotenv').config()
const expressSession = require('express-session');
const passport = require('passport');
const connectDB = require('./config/mongoose-connection');
const authRouter = require('./routes/authRouter')
connectDB();
require('./config/googleStrategy');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);



app.listen(process.env.EXPRESS_PORT)