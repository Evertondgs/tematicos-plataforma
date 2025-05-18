import React from 'react';
import { useRouter } from 'next/router';

const fases = [
  { nome: 'Introdução', rota: '/trilhas/Comunicacao/fase1_introducao', desbloqueada: true },
  { nome: 'Por que nos comunicamos?', rota: '/fase1/2', desbloqueada: true },
  { nome: 'Tipos de Comunicação', rota: '/fase1/3', desbloqueada: false },
  { nome: 'Importância da Comunicação', rota: '/fase1/4', desbloqueada: false },
  { nome: 'Comunicação Assertiva', rota: '/fase1/5', desbloqueada: false },
  { nome: 'Técnicas de Negociação', rota: '/fase1/6', desbloqueada: false },
  { nome: 'Tríade da Comunicação', rota: '/fase1/7', desbloqueada: false },
  { nome: 'A Arte de Falar em Público', rota: '/fase1/8', desbloqueada: false },
  { nome: 'Comunicação em Crises', rota: '/fase1/9', desbloqueada: false },
];

export default function MapaTrilhaComunicacao() {
  const router = useRouter();

  const handleAcessar = (fase) => {
    if (fase.desbloqueada) {
      router.push(fase.rota);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-pink-500 mb-2">Mapa da Fase 1: Comunicação</h1>
      <p className="text-white/70 mb-6">Avance nas fases até dominar a gestão da comunicação!</p>

      <div className="flex overflow-x-auto space-x-6 p-4 bg-slate-800 rounded-xl shadow-inner">
        {fases.map((fase, index) => (
          <div key={index} className="relative flex flex-col items-center group">
            {/* Caminho entre as fases */}
            {index !== 0 && (
              <div className="absolute -left-12 top-8 w-12 h-1 bg-white/30"></div>
            )}

            {/* Avatar marcador animado */}
            {fase.desbloqueada && index === 0 && (
              <div className="absolute -top-6 animate-bounce text-xl">🧍‍♂️</div>
            )}

            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition transform group-hover:scale-110 ${
                fase.desbloqueada ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-500 cursor-not-allowed'
              }`}
              onClick={() => handleAcessar(fase)}
            >
              {index + 1}
            </div>
            <p className="text-sm mt-2 text-center text-white w-24">{fase.nome}</p>
          </div>
        ))}

        {/* Objetivo final */}
        <div className="relative flex flex-col items-center ml-6">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            🎯
          </div>
          <p className="text-sm mt-2 text-center text-white w-24">Gestão da Comunicação</p>
        </div>
      </div>
    </div>
  );
}
