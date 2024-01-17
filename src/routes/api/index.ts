const apiController = require('../../controllers/api');
const apiRouiter = require('express').Router();

apiRouiter.use(apiController.countIncrement)


/**
 * @swagger
 * tags:
 *   - name: Players
 *     description: Operations about players
 *   - name: Games
 *     description: Operations about games
 */



/**
 * @swagger
 * /api/player/{id}:
 *   get:
 *     tags: [Players]
 *     summary: Get a player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The player ID
 *     responses:
 *       200:
 *         description: The player was successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: The player was not found
 */
apiRouiter.get('/player/:id', apiController.getPlayer);

/**
 * @swagger
 * /api/player/{id}:
 *   put:
 *     tags: [Players]
 *     summary: Update a player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The player ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Player'
 *     responses:
 *       200:
 *         description: The player was successfully updated
 *       404:
 *         description: The player was not found
 */
apiRouiter.put('/player/:id', apiController.updatePlayer);

/**
 * @swagger
 * /api/player/{id}:
 *   delete:
 *     tags: [Players]
 *     summary: Delete a player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The player ID
 *     responses:
 *       200:
 *         description: The player was successfully deleted
 *       404:
 *         description: The player was not found
 */
apiRouiter.delete('/player/:id', apiController.removePlayer);

/**
 * @swagger
 * /api/player:
 *   post:
 *     tags: [Players]
 *     summary: Create a new player
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Player'
 *     responses:
 *       201:
 *         description: The player was successfully created
 *       400:
 *         description: The request body is invalid
 */
apiRouiter.post('/player', apiController.addPlayer);

/**
 * @swagger
 * /api/players:
 *  get:
 *    tags: [Players]
 *    description: Get all players
 *    parameters:
 *      - in: query
 *        name: search
 *        schema:
 *          type: string
 *        description: Search term
 *    responses:
 *      '200':
 *      description: A successful response
 *      content:
 *          application/json:
 *      schema:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/Player'
 */
apiRouiter.get('/players', apiController.listPlayers);

/**
 * @swagger
 * /api/games:
 *   get:
 *     tags: [Games]
 *     summary: Get all games
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term
 *     responses:
 *       200:
 *         description: The list of games was successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Game'
 */
apiRouiter.get('/games', apiController.listGames);


/**
 * @swagger
 * /api/game/{id}:
 *   get:
 *    tags: [Games]
 *     summary: Get a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The game ID
 *     responses:
 *       200:
 *         description: The game was successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: The game was not found
 */
apiRouiter.get('/game/:id', apiController.getGame);

/**
 * @swagger
 * /api/game/{id}:
 *   put:
 *     tags: [Games]
 *     summary: Update a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The game ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: The game was successfully updated
 *       404:
 *         description: The game was not found
 */
apiRouiter.put('/game/:id', apiController.updateGame);

/**
 * @swagger
 * /api/game/{id}:
 *   delete:
 *     tags: [Games]
 *     summary: Delete a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The game ID
 *     responses:
 *       200:
 *         description: The game was successfully deleted
 *       404:
 *         description: The game was not found
 */
apiRouiter.delete('/game/:id', apiController.removeGame);

/**
 * @swagger
 * /api/game:
 *   post:
 *     tags: [Games]
 *     summary: Create a new game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       201:
 *         description: The game was successfully created
 *       400:
 *         description: The request body is invalid
 */
apiRouiter.post('/game', apiController.addGame);


module.exports = apiRouiter;