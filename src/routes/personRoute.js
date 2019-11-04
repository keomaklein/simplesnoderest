const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
router.get('/pessoa', controller.pessoas);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
module.exports = router;