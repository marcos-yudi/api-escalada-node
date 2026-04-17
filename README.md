## 🔒 Autenticação (JWT)
Todas as rotas `/api/rotas` são protegidas. Faça o login para obter o Token.
* **POST /api/auth/login**
  * Body: `{ "email": "admin@ginasioescalada.com", "senha": --- }`
  * Passe o token recebido no header: `Authorization: Bearer <SEU_TOKEN>`

## 🔍 Paginação, Filtros e Ordenação
A rota de listagem suporta Query Params avançados:
* **GET /api/rotas?page=2&limit=5** (Retorna 5 rotas da página 2)
* **GET /api/rotas?grau=V5&corAgarras=Roxo** (Filtra por grau e cor)
* **GET /api/rotas?sortBy=grau&order=ASC** (Ordena do grau mais fácil para o mais difícil)

## ☁️ Deploy (Render)
https://api-escalada-node.onrender.com

Esta API está configurada para deploy fácil no [Render.com](https://render.com).
1. Conecte seu GitHub ao Render.
2. Crie um novo "Web Service".
3. Build Command: `npm install`
4. Start Command: `npm start`
