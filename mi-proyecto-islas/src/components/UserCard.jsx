import { useState } from 'react';

export default function UserCard({ children }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ 
      background: 'white', 
      padding: '1rem', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Aquí Astro inyectará el link estático */}
      <div className="user-info">
        {children}
      </div>
      
      {/* Esta es la parte interactiva que requiere JS */}
      <button 
        onClick={() => setIsFollowing(!isFollowing)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: isFollowing ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </button>
    </div>
  );
}