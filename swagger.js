const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
        components: {
            schemas: {
                Player: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Player ID',
                        },
                        name: {
                            type: 'string',
                            description: 'Player name',
                        },
                        surname: {
                            type: 'string',
                            description: 'Player surname',
                        },
                        birthdate: {
                            type: 'string',
                            format: 'date',
                            description: 'Player birthdate',
                        },
                        game_id: {
                            type: 'integer',
                            description: 'ID of the game the player is associated with',
                        },
                    },
                },
                Game: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Game ID',
                        },
                        name: {
                            type: 'string',
                            description: 'Game name',
                        },
                        release_date: {
                            type: 'string',
                            format: 'date',
                            description: 'Game release date',
                        },
                        // Add other properties as needed
                    },
                },
            },
        },
    },
    apis: ['./src/**/*.ts'], // files containing annotations as above
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};