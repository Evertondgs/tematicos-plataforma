// pages/painel-aprendizagem.js
import Head from 'next/head';
import Flashcards from '../components/Flashcards';
import Anotacoes from '../components/Anotacoes';
import MapasMentais from '../components/MapasMentais';
import withAuth from '../components/withAuth';
import Layout from '../components/Layout';
import { useState } from 'react';

function PainelAprendizagem() {
  const [abaAtiva, setAbaAtiva] = useState('flashcards');

  return (
    <Layout>
      <Head>
        <title>Painel de Aprendizagem | Temáticos</title>
      </Head>

      <div className="w-full h-full min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white p-4 sm:p-6">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Painel de Aprendizagem</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setAbaAtiva('flashcards')}
              className={`px-4 py-2 rounded ${abaAtiva === 'flashcards' ? 'bg-pink-500' : 'bg-gray-700'}`}
            >
              Flashcards
            </button>
            <button
              onClick={() => setAbaAtiva('anotacoes')}
              className={`px-4 py-2 rounded ${abaAtiva === 'anotacoes' ? 'bg-pink-500' : 'bg-gray-700'}`}
            >
              Anotações
            </button>
            <button
              onClick={() => setAbaAtiva('mapas')}
              className={`px-4 py-2 rounded ${abaAtiva === 'mapas' ? 'bg-pink-500' : 'bg-gray-700'}`}
            >
              Mapas Mentais
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            {abaAtiva === 'flashcards' && <Flashcards />}
            {abaAtiva === 'anotacoes' && <Anotacoes />}
            {abaAtiva === 'mapas' && <MapasMentais />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(PainelAprendizagem);
