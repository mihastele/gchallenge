const indexController = require('../controllers/index');
const router = require('express').Router();

router.get('/', indexController.home);

router.post('/player', indexController.addPlayer);
router.post('/game', indexController.addGame);

module.exports = router;