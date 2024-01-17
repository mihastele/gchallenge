const indexController = require('../controllers');
const router = require('express').Router();
const apiRouter = require('./api');

router.get('/', indexController.home);

router.use('/api', apiRouter);

module.exports = router;