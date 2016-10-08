'use strict';
const messages = require('./controllers/messages');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const mysql = require('mysql');
const path = require('path');
const app = module.exports = koa();

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'5143209',
  database:'neuq_st'
});


connection.connect();
// Logger
app.use(logger());


// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());


//router
require('./routes')(app);

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
