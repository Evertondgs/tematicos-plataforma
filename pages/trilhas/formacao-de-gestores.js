// pages/trilhas/formacao-de-gestores.js
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

function TrilhaFormacaoGestores() {
  return (
    <>
      <Head>
        <title>Trilha - Formação de Gestores | Temáticos</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 sm:mb-6">
            Trilha: Formação de Gestores
          </h1>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Veja abaixo as fases que compõem sua trilha de desenvolvimento.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            {/* Fase 1 - Liberada com botão */}
            <div className="bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20 shadow">
              <h2 className="text-base sm:text-lg font-semibold mb-2">✅ Fase 1: Comunicação</h2>
              <p className="mb-4 text-white/80 text-sm">Aprenda a se comunicar com clareza, firmeza e empatia.</p>
              <Link
                href="/trilhas/fase1-comunicacao"
                className="inline-block mt-2 px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm transition transform hover:scale-105"
              >
                Acessar
              </Link>
            </div>

            {/* Fases bloqueadas */}
            {[
              { fase: 2, titulo: "Gestão de Pessoas", desc: "Liderança, motivação, feedback e delegação eficaz." },
              { fase: 3, titulo: "Produtividade e Tempo", desc: "Otimize seu tempo com foco, planejamento e priorização." },
              { fase: 4, titulo: "Gestão de Processos e Projetos", desc: "Crie rotinas eficientes e conduza projetos com excelência." },
              { fase: 5, titulo: "Estratégia Organizacional", desc: "Pense estrategicamente e alinhe sua equipe aos objetivos do negócio." },
              { fase: 6, titulo: "Finanças para Gestores", desc: "Aprenda o essencial sobre indicadores, orçamento e ROI." },
              { fase: 7, titulo: "Comunicação em Crises", desc: "Como se posicionar com clareza e segurança em momentos críticos." }
            ].map(({ fase, titulo, desc }) => (
              <div
                key={fase}
                className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow opacity-50"
              >
                <h2 className="text-base sm:text-lg font-semibold mb-2">🔒 Fase {fase}: {titulo}</h2>
                <p className="mb-2 text-white/70 text-sm">{desc}</p>
                <span className="text-white/50 italic text-sm">Bloqueado</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(TrilhaFormacaoGestores);