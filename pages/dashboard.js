// pages/dashboard.js
import Head from 'next/head';
import Link from 'next/link';
import withAuth from '../components/withAuth';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | Temáticos for Business</title>
      </Head>
      <div className="flex h-screen bg-gray-100 font-sans">
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow px-6 py-4 flex justify-between items-center border-b border-gray-200">
            <input
              type="text"
              placeholder="O que você quer desenvolver?"
              className="w-1/2 p-2 border border-gray-300 rounded text-sm"
            />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Everton</span>
              <div className="w-8 h-8 bg-pink-500 rounded-full text-white flex items-center justify-center font-bold">E</div>
            </div>
          </header>

          {/* Conteúdo do dashboard */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">Trilhas em andamento</h1>

              {/* Card de trilha em andamento */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between hover:shadow-md transition-all ease-in-out duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="text-purple-500 text-xl">🎓</span>
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">Formação de Gestores</h2>
                    <p className="text-sm text-gray-600">Fase atual: Comunicação Assertiva</p>
                    <p className="text-xs text-gray-500 mt-1">Próxima aula: Identificando barreiras na escuta – 10min</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className="bg-pink-500 h-2 rounded-full transition-all duration-500 ease-in-out" style={{ width: '14%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Progresso: 14%</p>
                  </div>
                </div>
                <Link href="/fases/fase1" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded transition transform hover:scale-105">
                  Continuar
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);