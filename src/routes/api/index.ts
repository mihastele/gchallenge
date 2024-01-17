const apiController = require('../../controllers/api');
const apiRouiter = require('express').Router();

apiRouiter.use(apiController.countIncrement)

apiRouiter.get('/players', apiController.listPlayers);
apiRouiter.get('/player/:id', apiController.getPlayer);
apiRouiter.put('/player/:id', apiController.updatePlayer);
apiRouiter.delete('/player/:id', apiController.removePlayer);
apiRouiter.post('/player', apiController.addPlayer);

apiRouiter.get('/games', apiController.listGames);
apiRouiter.get('/game/:id', apiController.getGame);
apiRouiter.put('/game/:id', apiController.updateGame);
apiRouiter.delete('/game/:id', apiController.removeGame);
apiRouiter.post('/game', apiController.addGame);


module.exports = apiRouiter;