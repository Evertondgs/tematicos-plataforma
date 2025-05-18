// pages/comunicacao/fase1_introducao.js
import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import withAuth from '../../../components/withAuth';
import Layout from '../../../components/Layout';

function Introducao() {
  const router = useRouter();
  const [videoFinalizado, setVideoFinalizado] = useState(false);

  const handleVideoEnd = () => {
    setVideoFinalizado(true);
  };

  const handleAvancar = () => {
    if (videoFinalizado) {
      router.push('/fases/fase1/comunicacao-assertiva'); // Caminho para a próxima fase
    }
  };

  return (
    <Layout>
      <Head>
        <title>Introdução à Comunicação | Temáticos</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Introdução à Comunicação</h1>

        <div className="max-w-4xl w-full mb-6 rounded-xl overflow-hidden shadow-lg border border-white/10">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=TxJtoBAa2w0" // Substitua pelo vídeo correto depois
            controls
            playing
            width="100%"
            height="400px"
            onEnded={handleVideoEnd}
          />
        </div>

        <p className="text-lg mb-6 text-center">
          Entenda os pilares da comunicação humana, a sua importância para o desenvolvimento pessoal e profissional, e como ela evoluiu ao longo da história.
        </p>

        <button
          onClick={handleAvancar}
          disabled={!videoFinalizado}
          className={`px-6 py-3 rounded-md text-white font-semibold transition ${
            videoFinalizado ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'
          }`}
        >
          Avançar para Fase 2 - Comunicação Assertiva
        </button>
      </div>
    </Layout>
  );
}

export default withAuth(Introducao);