import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Bem-vindo ao Sistema Loja Rei</h1>
      <p className="mb-8 text-lg text-blue-800">Gerencie sua loja de forma simples, rápida e segura.</p>
      <button
        className="px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
        onClick={() => navigate("/login")}
      >
        Acessar Sistema
      </button>
    </div>
  );
} 