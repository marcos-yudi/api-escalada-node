const express = require('express');
const rotaController = require('../controllers/rotaController');
const router = express.Router();

router.post('/', rotaController.criarRota);
router.get('/', rotaController.listarRotas);
router.put('/:id', rotaController.atualizarRota);
router.delete('/:id', rotaController.deletarRota);

module.exports = router;