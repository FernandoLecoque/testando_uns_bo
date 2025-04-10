const request = require('supertest');
const app = require('./app');

describe(' GET /saudacao', () => {
    it('Deve retornar uma saudação', async () => {
        const res = await request(app).get('/saudacao');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ mensagem: 'Salve Mundo' });
    })
});
