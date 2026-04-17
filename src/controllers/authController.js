// Lógica de Login

const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email , senha } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email } });
        if(!user) return res.status(404).json({ erro: 'Usuário não encontrado' });

        const senhaValida = await bcrypt.compare(senha, user.senha);
        if(!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        
        return res.json({ token, usuario: { email: user.email } });
    } catch(error) {
        return res.status(500).json({ erro: 'Erro no servidor'});
    }
};