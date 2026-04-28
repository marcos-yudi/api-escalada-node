const express = require('express');
const rotaController = require('../controllers/rotaController');

// Importação ferramentas de validação do express-validator
const { body, param } = require('express-validator');

const router = express.Router();

// POST com validação no 'body'
router.post('/', [
    body('nome').notEmpty.withMessage('O nome da rota é obrigatório.'),
    body('grau').notEmpty.withMessage('O grau é obrigatório.'),
    body('corAgarras').notEmpty.withMessage('A cor das agarras é obrigatória.'),
    body('routeSetter').notEmpty.withMessage('O route setter é obrigatório.'),
    body('setorId').isInt.withMessage('O ID do setor deve ser um número inteiro.')
], rotaController.criarRota);

// GET
router.get('/', rotaController.listarRotas);

// PUT com validação no 'param' URL
router.put('/:id', [
    param('id').isUUID.withMessage('O ID informado é inválido.')
], rotaController.atualizarRota);

// DELETE com validação no 'param' URL
router.delete('/:id', [
    param('id').isUUID.withMessage('O ID informado é inválido.')
], rotaController.deletarRota);

module.exports = router;