/**
 * Created by qoder on 16/10/8.
 */
const router = require('koa-router')();
const controller = require('./index.controller');

router.get('/', controller.index);

module.exports = router;
