import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Registrar() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      router.push('/dashboard');
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Registrar | Temáticos</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 px-4">
        <div className="w-full max-w-md bg-slate-900 text-white rounded-xl shadow-xl border border-white/10 p-8">
          <h1 className="text-2xl font-bold mb-1 text-center">Criar conta na Temáticos</h1>
          <p className="text-sm text-white/70 mb-6 text-center">Preencha seus dados abaixo</p>

          <form className="space-y-4" onSubmit={handleRegistro}>
            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {erro && <p className="text-red-400 text-sm text-center">{erro}</p>}
            <button
              type="submit"
              className="w-full py-2 rounded bg-green-400 text-slate-900 font-bold hover:bg-green-300 transition"
            >
              Cadastrar
            </button>
          </form>

          <div className="text-xs text-white/70 mt-4 text-center">
            <a href="/login" className="hover:underline">Voltar ao login</a>
          </div>
        </div>
      </div>
    </>
  );
}