const userService = require('../services/userService');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

const postUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear usuario' });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};
const putUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userService.updateUser(id, req.body);
        
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

const removeUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await userService.deleteUser(id);
        
        if (!deleted) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        
        res.status(204).send(); // 204 No Content es ideal para eliminaciones exitosas
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};
module.exports = { getUsers, postUser, getUser, putUser, removeUser  };