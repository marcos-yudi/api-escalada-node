require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const bcrypt = require('bcryptjs');

const authRoutes = require('./routes/authRoutes');
const rotaRoutes = require('./routes/rotaRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const Setor = require('./models/Setor');
const Rota = require('./models/Rota');
const Usuario = require('./models/Usuario');

const app = express();
app.use(cors());
app.use(express.json());

// Registro de rotas
app.use('/api/auth', authRoutes);
app.use('/api/rotas', authMiddleware, rotaRoutes);

const iniciarServidor = async () => {
    try {
        await sequelize.sync({ force: true});

        // Criação Admin
        const senhaHash = await bcrypt.hash('hfali7ta@gf!', 10);
        await Usuario.create({ email: 'admin@ginasioescalada.com', senha: senhaHash });

        // Criação Setores
        await Setor.bulkCreate([
            { nome: 'Caverna', descricao: 'Inclinação negativa' },
            { nome: 'Placa Principal', descricao: 'Parede vertical' }
        ]);

        // Criação rotas iniciais - teste paginação
        await Rota.bulkCreate([
            { nome: 'O Despertar', grau: 'V1', corAgarras: 'Azul', routeSetter: 'Marcos', setorId: 1 },
            { nome: 'Caminho das Pedras', grau: 'V2', corAgarras: 'Vermelho', routeSetter: 'Gabriel', setorId: 2 },
            { nome: 'A Fenda', grau: 'V3', corAgarras: 'Amarelo', routeSetter: 'Lorena', setorId: 1 },
            { nome: 'Voo Livre', grau: 'V4', corAgarras: 'Preto', routeSetter: 'Fabio', setorId: 2 },
            { nome: 'Agarrão', grau: 'V0', corAgarras: 'Verde', routeSetter: 'William', setorId: 1 },
            { nome: 'Teto Sujo', grau: 'V5', corAgarras: 'Roxo', routeSetter: 'Heloisa', setorId: 1 },
            { nome: 'Bote Certo', grau: 'V2', corAgarras: 'Laranja', routeSetter: 'Gabriel', setorId: 2 },
            { nome: 'Resistência', grau: 'V6', corAgarras: 'Branco', routeSetter: 'Fabio', setorId: 1 },
            { nome: 'Pé na Mão', grau: 'V3', corAgarras: 'Cinza', routeSetter: 'Marcos', setorId: 2 },
            { nome: 'Dinâmico', grau: 'V4', corAgarras: 'Azul', routeSetter: 'Gabriel', setorId: 1 },
        ]);

        console.log('Banco de dados conectado e populado!');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000 !');
        });

    } catch(error) {
        console.error('Erro ao iniciar:', error);
    }
};

iniciarServidor();