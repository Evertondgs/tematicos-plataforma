// pages/esqueci-senha.js
import Head from 'next/head';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function EsqueciSenha() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleResetSenha = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');
    try {
      await sendPasswordResetEmail(auth, email);
      setMensagem('Um link de redefinição de senha foi enviado para seu e-mail.');
    } catch (error) {
      setErro('Erro ao enviar e-mail: ' + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Esqueci minha senha | Temáticos</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 px-4">
        <div className="w-full max-w-md bg-slate-900 text-white rounded-xl shadow-xl border border-white/10 p-8">
          <h1 className="text-2xl font-bold mb-1 text-center">Recuperar senha</h1>
          <p className="text-sm text-white/70 mb-6 text-center">Informe seu e-mail para receber o link de redefinição</p>

          <form className="space-y-4" onSubmit={handleResetSenha}>
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
            {mensagem && <p className="text-green-400 text-sm text-center">{mensagem}</p>}
            {erro && <p className="text-red-400 text-sm text-center">{erro}</p>}
            <button
              type="submit"
              className="w-full py-2 rounded bg-pink-500 text-white font-bold hover:bg-pink-400 transition"
            >
              Enviar link de redefinição
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
