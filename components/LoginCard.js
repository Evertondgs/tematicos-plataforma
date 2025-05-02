// components/LoginCard.js
import { auth, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function LoginCard() {
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setError("Erro ao autenticar. Tente novamente.");
    }
  };

  return (
    <div className="relative z-10 bg-white/10 text-white backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-md w-full text-center border border-white/20">
      <img src="/assets/logo-lampada.png" alt="Logo Temáticos" className="w-16 mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-3">Bem-vindo ao Temáticos</h1>
      <p className="mb-6 text-lg text-pink-200">Transforme o hábito de jogar em uma jornada de aprendizado!</p>
      <button onClick={handleLogin} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
        Entrar com Google
      </button>
      {error && <p className="mt-4 text-red-300 text-sm">{error}</p>}
    </div>
  );
}