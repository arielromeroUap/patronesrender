import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserList } from './pages/UserList';
import { UserDetail } from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <nav className="bg-blue-600 p-4 shadow-md mb-8">
          <div className="max-w-5xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">React CSR Lab ⚛️</h1>
            <span className="text-xs bg-blue-800 px-2 py-1 rounded">Single Page Application</span>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;