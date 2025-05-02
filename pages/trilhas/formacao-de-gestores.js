// pages/trilhas/formacao-de-gestores.js
import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';

export default function TrilhaFormacaoGestores() {
  return (
    <>
      <Head>
        <title>Trilha - Formação de Gestores | Temáticos</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white p-6">
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-3xl font-bold text-pink-400 mb-6">Trilha: Formação de Gestores</h1>
          <p className="text-white/80 mb-8">Veja abaixo as fases que compõem sua trilha de desenvolvimento.</p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Fase 1 - Liberada com botão */}
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow">
              <h2 className="text-lg font-semibold mb-2">✅ Fase 1: Comunicação Assertiva</h2>
              <p className="mb-4 text-white/80">Aprenda a se comunicar com clareza, firmeza e empatia.</p>
              <Link
                href="/fases/fase1"
                className="inline-block mt-2 px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white font-semibold transition transform hover:scale-105"
              >
                Acessar
              </Link>
            </div>

            {/* Fases 2 a 7 - Bloqueadas */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 2: Gestão de Pessoas</h2>
              <p className="mb-2 text-white/70">Liderança, motivação, feedback e delegação eficaz.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 3: Produtividade e Tempo</h2>
              <p className="mb-2 text-white/70">Otimize seu tempo com foco, planejamento e priorização.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 4: Gestão de Processos e Projetos</h2>
              <p className="mb-2 text-white/70">Crie rotinas eficientes e conduza projetos com excelência.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 5: Estratégia Organizacional</h2>
              <p className="mb-2 text-white/70">Pense estrategicamente e alinhe sua equipe aos objetivos do negócio.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 6: Finanças para Gestores</h2>
              <p className="mb-2 text-white/70">Aprenda o essencial sobre indicadores, orçamento e ROI.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow opacity-50">
              <h2 className="text-lg font-semibold mb-2">🔒 Fase 7: Comunicação em Crises</h2>
              <p className="mb-2 text-white/70">Como se posicionar com clareza e segurança em momentos críticos.</p>
              <span className="text-white/50 italic">Bloqueado</span>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}