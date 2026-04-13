const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON
const filePath = path.join(__dirname, '../data/users.json');

// Función auxiliar para leer el archivo
const readData = () => {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
};

// Función auxiliar para escribir en el archivo
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getAllUsers = async () => {
    return readData();
};

const createUser = async (userData) => {
    const users = readData();
    
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        ...userData,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeData(users);
    return newUser;
};

const getUserById = async (id) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // Convertimos el id a número para asegurar la comparación correcta
    return users.find(u => u.id === parseInt(id));
};


const updateUser = async (id, updateData) => {
    const users = readData();
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index === -1) return null;

    // Actualizamos el usuario manteniendo el ID original
    users[index] = { ...users[index], ...updateData, id: parseInt(id) };
    
    writeData(users);
    return users[index];
};

const deleteUser = async (id) => {
    const users = readData();
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index === -1) return false;

    // Filtramos para eliminar el usuario
    const filteredUsers = users.filter(u => u.id !== parseInt(id));
    writeData(filteredUsers);
    return true;
};
module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };