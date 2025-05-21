// pages/trilha-introducao.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const fases = [
  {
    titulo: 'Bem-vindo ao Temáticos',
    descricao: 'Descubra como a plataforma pode transformar sua aprendizagem.',
    video: 'https://www.youtube.com/watch?v=TxJtoBAa2w0'
  },
  {
    titulo: 'Como funciona a progressão',
    descricao: 'Entenda o sistema de trilhas, pontuações e conquistas.',
    video: 'https://www.youtube.com/watch?v=TxJtoBAa2w0'
  },
  {
    titulo: 'Flashcards e revisão espaçada',
    descricao: 'Aprenda como essas ferramentas vão reforçar seu aprendizado.',
    video: 'https://www.youtube.com/watch?v=TxJtoBAa2w0'
  },
  {
    titulo: 'Gamificação e recompensas',
    descricao: 'Veja como você será recompensado por evoluir no jogo do conhecimento.',
    video: 'https://www.youtube.com/watch?v=TxJtoBAa2w0'
  },
  {
    titulo: 'Pronto para começar!',
    descricao: 'Conclua essa trilha introdutória e mergulhe em seu desenvolvimento.',
    video: 'https://www.youtube.com/watch?v=TxJtoBAa2w0'
  }
];

export default function TrilhaIntroducao() {
  const [faseAtual, setFaseAtual] = useState(0);
  const router = useRouter();

  const proximaFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
    } else {
      router.push('/dashboard'); // Redirecionar para o dashboard ao concluir
    }
  };

  const fase = fases[faseAtual];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-8">
        <Head>
          <title>Trilha de Introdução | Temáticos</title>
        </Head>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{fase.titulo}</h1>
          <p className="text-white/80 mb-6">{fase.descricao}</p>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="w-full h-64 sm:h-96 rounded-lg"
              src={fase.video.replace('watch?v=', 'embed/')}
              title={fase.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={proximaFase}
            className="px-6 py-3 rounded bg-pink-500 hover:bg-pink-600 font-semibold transition"
          >
            {faseAtual === fases.length - 1 ? 'Concluir e ir ao Dashboard' : 'Avançar para próxima fase'}
          </button>
        </div>
      </main>
    </div>
  );
}
