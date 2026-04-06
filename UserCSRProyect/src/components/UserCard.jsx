import { Link } from 'react-router-dom';

export function UserCard({ user }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Avatar con inicial */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-inner">
        {user.name.charAt(0)}
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {user.name}
        </h2>
        <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
          <span className="opacity-60">✉️</span> {user.email}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50">
        <Link 
          to={`/user/${user.id}`} 
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-indigo-700 transition-colors"
        >
          Ver perfil completo
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}