const request = require('supertest');
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

// Cria um "mini-servidor" falso só para o teste rodar super rápido
const app = express();
app.get('/api/rota-secreta', authMiddleware, (req, res) => res.status(200).send('Sucesso'));

describe('Testes de Segurança e JWT', () => {
    
    it('Deve bloquear o acesso se nenhum Token for enviado (Status 401)', async () => {
        const response = await request(app).get('/api/rota-secreta'); 
        expect(response.status).toBe(401);
        expect(response.body.erro).toBe('Token não fornecido');
    });

    it('Deve bloquear o acesso com um Token falso/inválido (Status 401)', async () => {
        const response = await request(app)
            .get('/api/rota-secreta')
            .set('Authorization', 'Bearer token_inventado_123');
            
        expect(response.status).toBe(401);
        expect(response.body.erro).toBe('Token inválido');
    });
});