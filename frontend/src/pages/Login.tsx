import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Simulação de login
    localStorage.setItem('user', JSON.stringify({ nome, email }));
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Login</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">Entrar</button>
      </form>
    </div>
  );
} 