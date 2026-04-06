const express = require('express');
const cors = require('cors'); // Importar CORS

const app = express();
const PORT = 3000;
app.use(cors()); // Permitir peticiones desde otros dominios (tu app de React)
// 1. Modelo de Datos (Simulado)
const users = [
  { id: 1, name: "Samuel Olmos (Server)", email: "Sincere@april.biz" },
  { id: 2, name: "Evelyn Inostroza (Server)", email: "Shanna@melissa.tv" },
  { id: 3, name: "Enzo Marin (Server)", email: "Nathan@yesenia.net" }
];

// 2. Endpoint de API (Para el ejemplo de CSR)
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Ruta GET con parámetro :id
app.get('/api/users/:id', (req, res) => {
    // 1. Extraemos el id de los parámetros de la URL
    const userId = req.params.id;

    // 2. Buscamos al usuario (usamos Number() porque params.id es un string)
    const user = users.find(u => u.id === Number(userId));

    // 3. Validamos si el usuario existe
    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // 4. Devolvemos el usuario
    res.json(user);
});



// 3. La Ruta Maestra (Para demostrar SSR)
app.get('/ssr-demo', (req, res) => {
  // Generamos el HTML manualmente para que los alumnos vean qué recibe el navegador
  const userListHtml = users.map(user => `
    <div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg shadow-sm mb-3">
      <p class="font-bold text-gray-800">${user.name}</p>
      <p class="text-sm text-gray-600">${user.email}</p>
    </div>
  `).join('');

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>SSR Demo</title>
    </head>
    <body class="bg-gray-100 p-8">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h1 class="text-2xl font-bold mb-4 text-purple-700 underline">Vista Server-Side Rendering (Real)</h1>
            <p class="mb-6 text-gray-600">Este HTML fue generado en el servidor Node.js.</p>
            
            <div id="user-list">
                ${userListHtml}
            </div>

            <button onclick="alert('¡JavaScript funciona!')" class="mt-6 bg-purple-600 text-white px-4 py-2 rounded">
                Probar Interactividad
            </button>
        </div>
    </body>
    </html>
  `;

  res.send(fullHtml);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor de clase corriendo en http://localhost:${PORT}`);
  console.log(`🔗 Prueba SSR real en: http://localhost:${PORT}/ssr-demo`);
});