// Lógica de Login
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Importa o validationResult para checar erros
const { validationResult } = require('express-validator');

exports.login = async (req, res) => {
    // 2. Checa se as validações da rota falharam
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        // Se falhar, retorna status 400 (Bad Request) e lista de erros
        return res.status(400).json({ erros: erros.array() });
    }

    const { email, senha } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email } });
        if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });

        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.json({ token, usuario: { email: user.email } });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro no servidor' });
    }
};