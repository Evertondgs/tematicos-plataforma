// pages/login.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, provider } from '../lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const loginComGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const usuario = result.user;
      setUser(usuario);
      localStorage.setItem('userId', usuario.uid); // <- salva o UID
      router.push('/dashboard');
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      setErro("Erro ao entrar com Google.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      const credenciais = await signInWithEmailAndPassword(auth, email, senha);
      const usuario = credenciais.user;
      localStorage.setItem('userId', usuario.uid); // <- salva o UID
      setUser(usuario);
      router.push('/dashboard');
    } catch (error) {
      console.error("Erro ao entrar:", error);
      setErro('E-mail ou senha inválidos.');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem('userId', user.uid); // <- também garante persistência aqui
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 px-4 py-10">
        <div className="w-full max-w-md bg-slate-900 text-white rounded-xl shadow-2xl border border-white/10 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Bem-vindo à plataforma Temáticos</h1>
          <p className="text-sm text-white/70 mb-6 text-center">Faça seu login e boa jornada!</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {erro && <p className="text-red-400 text-sm text-center">{erro}</p>}
            <button type="submit" className="w-full py-2 rounded bg-green-400 text-slate-900 font-bold hover:bg-green-300 transition">
              ENTRAR
            </button>
            <button
              type="button"
              onClick={loginComGoogle}
              className="w-full py-2 rounded border border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition"
            >
              ENTRAR COM GOOGLE
            </button>
          </form>

          <div className="text-xs text-white/70 mt-6 text-center space-x-2">
            <a href="/registrar" className="hover:underline">Primeiro acesso</a>
            <span>/</span>
            <a href="/esqueci-senha" className="hover:underline">Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </>
  );
}
