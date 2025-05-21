// pages/dashboard.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import withAuth from '../components/withAuth';
import Layout from '../components/Layout';

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/login';
  };

  return (
    <Layout>
      <Head>
        <title>Dashboard | Temáticos for Business</title>
      </Head>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-gray-200 relative">
            <input
              type="text"
              placeholder="O que você quer desenvolver?"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded text-sm"
            />
            <div className="relative mt-2 sm:mt-0">
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="flex items-center gap-2"
              >
                <span className="text-sm font-medium text-gray-700">
                  {usuario?.displayName ||  usuario?.email?.split('@')[0] || 'Usuário'}
                </span>
                <div className="w-8 h-8 bg-pink-500 rounded-full text-white flex items-center justify-center font-bold uppercase">
                  {(usuario?.displayName || usuario?.email || 'U')[0]}
                </div>
              </button>

              {/* Menu dropdown */}
              {menuAberto && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* Conteúdo */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
            <div className="max-w-screen-xl mx-auto space-y-10">
              {/* Trilha introdutória */}
              <section>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  Novo por aqui?
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <span className="text-yellow-600 text-xl">🧭</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Conheça o Temáticos</h3>
                      <p className="text-sm text-gray-600">Aprenda como funciona a plataforma, os pontos, conquistas e a mecânica de aprendizado.</p>
                      <p className="text-xs text-gray-500 mt-1">Duração média: 5 a 10 minutos</p>
                    </div>
                  </div>
                  <Link
                    href="/trilhas/trilha-introducao"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded text-center transition transform hover:scale-105"
                  >
                    Iniciar Trilha
                  </Link>
                </div>
              </section>

              {/* Trilha em andamento */}
              <section>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
                  Trilhas em andamento
                </h1>

                <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 hover:shadow-md transition-all ease-in-out duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <span className="text-purple-500 text-xl">🎓</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg text-gray-800">Formação de Gestores</h2>
                      <p className="text-sm text-gray-600">Fase atual: Comunicação Assertiva</p>
                      <p className="text-xs text-gray-500 mt-1">Próxima aula: Identificando barreiras na escuta – 10min</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div
                          className="bg-pink-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                          style={{ width: '14%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Progresso: 14%</p>
                    </div>
                  </div>
                  <Link
                    href="/trilhas/formacao-de-gestores"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded text-center transition transform hover:scale-105"
                  >
                    Continuar
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);
