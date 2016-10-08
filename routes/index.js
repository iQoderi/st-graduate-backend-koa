/**
 * Created by qoder on 16/10/8.
 */
const Router =require('koa-router')();
const index=require('../api/index');

module.exports=function (app) {
  Router.use('/',index.routes());
  app.use(Router.routes());
};
