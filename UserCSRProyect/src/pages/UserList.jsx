import { useState, useEffect } from 'react';
import { UserCard } from '../components/UserCard';

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="h-56 bg-gray-200 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="py-8">
      <header className="mb-10 border-l-4 border-blue-600 pl-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Directorio de Usuarios</h1>
        <p className="text-gray-600 mt-2">Explora los perfiles cargados dinámicamente vía CSR.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}