// pages/perfil.js
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import Layout from '../components/Layout';


const Perfil = () => {
  const player = {
    name: "Everton",
    level: 5,
    xp: 3480,
    xpToNextLevel: 5000,
    avatar: "/avatar_orion.png",
    achievements: [
      { id: 1, name: "Primeira Jornada", unlocked: true },
      { id: 2, name: "Aprendiz da Comunicação", unlocked: true },
      { id: 3, name: "Explorador", unlocked: false },
      { id: 4, name: "Estudante Consistente", unlocked: false },
      { id: 5, name: "Revisão é Poder", unlocked: false },
    ],
    progress: { currentTrack: "Gestão da Comunicação", completedStages: 5, totalStages: 10 },
    recentActivities: [
      "Conquistou 'Aprendiz da Comunicação'",
      "Finalizou a Fase 4 da Trilha",
      "Visualizou o vídeo 'História da Comunicação'",
    ],
  };

  const progressPercent = (player.xp / player.xpToNextLevel) * 100;
  const trilhaPercent = (player.progress.completedStages / player.progress.totalStages) * 100;

  return (
    <Layout>
    <div className="max-w-5xl mx-auto p-6 space-y-8 text-white">
      {/* Cabeçalho do jogador */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-6"
      >
        <img src={player.avatar} alt="Avatar" className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-2xl" />
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            {player.name}
            <Sparkles className="text-yellow-300 animate-pulse" size={24} />
          </h2>
          <p className="text-sm text-gray-300">Nível {player.level} - {player.xp} XP</p>
          <div className="h-2 bg-gray-700 mt-2 rounded overflow-hidden">
            <div className="bg-yellow-400 h-full transition-all duration-700" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </motion.div>

      {/* Conquistas */}
      <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl p-6 shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Conquistas Desbloqueadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {player.achievements.map((ach) => (
            <motion.div
              key={ach.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: ach.id * 0.1 }}
              className={`rounded-lg p-3 text-center ${
                ach.unlocked ? "bg-yellow-500 text-black" : "bg-gray-700 text-gray-400 border-2 border-dashed border-gray-500"
              } shadow-md`}
            >
              <Trophy className="mx-auto mb-1" size={24} />
              <span className="text-sm font-medium block leading-tight">{ach.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progresso da Trilha */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Progresso na Trilha</h3>
        <p className="text-sm text-gray-300 mb-2">
          {player.progress.currentTrack}: {player.progress.completedStages} de {player.progress.totalStages} fases concluídas
        </p>
        <div className="h-2 bg-gray-700 rounded overflow-hidden">
          <div className="bg-green-400 h-full transition-all duration-700" style={{ width: `${trilhaPercent}%` }} />
        </div>
      </div>

      {/* Atividades Recentes */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Atividades Recentes</h3>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {player.recentActivities.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default Perfil;