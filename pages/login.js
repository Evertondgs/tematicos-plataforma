import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, provider } from '../lib/firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const loginComGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push('/dashboard');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <Head>
        <title>Login | Temáticos</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 px-4">
        <div className="w-full max-w-md bg-slate-900 text-white rounded-xl shadow-xl border border-white/10 p-8">
          <h1 className="text-2xl font-bold mb-1 text-center">Bem-vindo à plataforma Temáticos</h1>
          <p className="text-sm text-white/70 mb-6 text-center">Faça seu login e boa jornada!</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input type="email" className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input type="password" className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <button type="submit" className="w-full py-2 rounded bg-green-400 text-slate-900 font-bold hover:bg-green-300 transition">ENTRAR</button>
            <button
              type="button"
              onClick={loginComGoogle}
              className="w-full py-2 rounded border border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition"
            >
              ENTRAR COM GOOGLE
            </button>
          </form>

          <div className="text-xs text-white/70 mt-4 text-center">
            <a href="#" className="hover:underline">Primeiro acesso</a> / <a href="#" className="hover:underline">Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </>
  );
}
