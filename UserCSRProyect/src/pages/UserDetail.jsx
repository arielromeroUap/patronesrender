import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 italic text-blue-500 animate-bounce font-medium">
      Cargando datos del servidor...
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors">
        ← Volver al listado principal
      </Link>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700"></div>
        
        <div className="px-10 pb-10">
          <div className="relative -mt-16 mb-6">
            <div className="w-32 h-32 bg-white rounded-full p-2 shadow-2xl mx-auto md:mx-0">
              <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-4xl font-black text-indigo-600 uppercase">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>

          <div className="text-center md:text-left border-b border-gray-100 pb-8">
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter">{user.name}</h1>
            <p className="text-lg text-indigo-600 font-semibold mt-1">ID del Registro: {user.id}</p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Correo Electrónico</span>
              <p className="text-xl text-gray-700 font-medium">{user.email}</p>
            </div>
            
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
              ✓ Usuario Verificado en Backend
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}