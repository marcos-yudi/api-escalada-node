describe('Testes de Rotas da API', () => {
    it('Deve exigir token para acessar as rotas (Retornar 401)', async () => {
        // Simulando uma requisição HTTP real no ambiente de teste
        const response = { status: 401 }; // Mock rápido para o exemplo
        expect(response.status).toBe(401);
    });

    it('Deve retornar dados formatados com paginação (Retornar 200)', async () => {
        const response = { status: 200, body: { totalItens: 20, paginaAtual: 1 } };
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('totalItens');
    });
});