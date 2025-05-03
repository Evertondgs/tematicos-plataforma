// pages/trilhas/fase1-comunicacao.js
import Head from 'next/head';
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import Header from '../../components/Header';
import MapaTrilhaComunicacao from '../../components/MapaTrilhaComunicacao';

function Fase1Comunicacao() {
  return (
    <>
      <Head>
        <title>Fase 1 - Comunicação | Temáticos</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-6 text-center sm:text-left">
          
          </h1>
          <MapaTrilhaComunicacao />
        </div>
      </main>
    </>
  );
}

export default withAuth(Fase1Comunicacao);
