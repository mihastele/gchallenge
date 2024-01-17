import request from 'supertest';
import app from '../../app'; // import your express app

describe('Should respond with proper 2XX status codes', () => {

    let playerId: number;
    let gameId: number;

    it('Players ', async () => {
        const response = await request(app).get('/api/players'); // replace with your route
        expect(response.statusCode).toBe(200);
    });

    it('Games', async () => {
        const response = await request(app).get('/api/games'); // replace with your route
        expect(response.statusCode).toBe(200);
    });

    it('Add Player', async () => {
        const response = await request(app).post('/api/player'); // replace with your route
        expect(response.statusCode).toBe(201);
        console.log(response.body);
        playerId = response.body.newPlayer.id;
    });

    it('Add Game', async () => {
        const response = await request(app).post('/api/game'); // replace with your route
        expect(response.statusCode).toBe(201);
        console.log(response.body);
        gameId = response.body.newGame.id;
    });

    it('Update Player', async () => {
        const response = await request(app).put(`/api/player/${playerId}`); // replace with your route
        expect(response.statusCode).toBe(202);
    });

    it('Update Game', async () => {
        const response = await request(app).put(`/api/game/${gameId}`); // replace with your route
        expect(response.statusCode).toBe(202);
    });

    it('Remove Player', async () => {
        const response = await request(app).delete(`/api/player/${playerId}`); // replace with your route
        expect(response.statusCode).toBe(204);
    });

    it('Remove Game', async () => {
        const response = await request(app).delete(`/api/game/${gameId}`); // replace with your route
        expect(response.statusCode).toBe(204);
    });

});