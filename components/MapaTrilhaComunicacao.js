import React from 'react';
import { useRouter } from 'next/router';

const fases = [
  { nome: 'Introdução à Comunicação', rota: '/fase1/1', desbloqueada: true },
  { nome: 'Comunicação Assertiva', rota: '/fase1/2', desbloqueada: false },
  { nome: 'Escuta Ativa', rota: '/fase1/3', desbloqueada: false },
  { nome: 'Técnicas de Apresentação', rota: '/fase1/4', desbloqueada: false },
  { nome: 'Comunicação Não Violenta', rota: '/fase1/5', desbloqueada: false },
  { nome: 'Negociação e Influência', rota: '/fase1/6', desbloqueada: false },
  { nome: 'Expressão em Crises', rota: '/fase1/7', desbloqueada: false },
];

export default function MapaTrilhaComunicacao() {
  const router = useRouter();

  const handleAcessar = (fase) => {
    if (fase.desbloqueada) {
      router.push(fase.rota);
    }
  };

  return (
    <div className="flex flex-col items-center px-2 sm:px-6">
      <h1 className="text-xl sm:text-2xl font-bold text-pink-500 mb-2 text-center">
        Mapa da Fase 1: Comunicação
      </h1>
      <p className="text-white/70 mb-6 text-sm sm:text-base text-center">
        Avance nas fases até dominar a gestão da comunicação!
      </p>

      <div className="flex overflow-x-auto space-x-4 sm:space-x-6 p-4 bg-slate-800 rounded-xl shadow-inner w-full">
        {fases.map((fase, index) => (
          <div key={index} className="relative flex flex-col items-center flex-shrink-0 w-24">
            {/* Linha entre as fases */}
            {index !== 0 && (
              <div className="absolute -left-12 top-8 w-12 h-1 bg-white/30 hidden sm:block"></div>
            )}

            {/* Avatar animado */}
            {fase.desbloqueada && index === 0 && (
              <div className="absolute -top-6 animate-bounce text-xl">🧍‍♂️</div>
            )}

            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition transform hover:scale-110 ${
                fase.desbloqueada ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-500 cursor-not-allowed'
              }`}
              onClick={() => handleAcessar(fase)}
            >
              {index + 1}
            </div>
            <p className="text-xs sm:text-sm mt-2 text-center text-white w-full">{fase.nome}</p>
          </div>
        ))}

        {/* Fim da trilha */}
        <div className="relative flex flex-col items-center flex-shrink-0 w-24 ml-2">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            🎯
          </div>
          <p className="text-xs sm:text-sm mt-2 text-center text-white">Gestão da Comunicação</p>
        </div>
      </div>
    </div>
  );
}