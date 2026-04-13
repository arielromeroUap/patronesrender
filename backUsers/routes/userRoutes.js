const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser); // Nueva ruta para el detalle
router.post('/', userController.postUser);
router.put('/:id', userController.putUser);      // Ruta para editar
router.delete('/:id', userController.removeUser); // Ruta para eliminar

module.exports = router;