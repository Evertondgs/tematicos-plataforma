// pages/fases/fase1.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';

export default function Fase1Comunicacao() {
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const router = useRouter();

  const verificarResposta = () => {
    if (resposta === 'assertiva') {
      setFeedback('✅ Excelente! Sua resposta demonstra firmeza, respeito e liderança. Você pode seguir para a próxima fase.');
    } else if (resposta === '') {
      setFeedback('❗ Por favor, selecione uma opção.');
    } else {
      setFeedback('⚠️ Essa resposta não representa uma comunicação assertiva. Tente novamente.');
    }
  };

  return (
    <>
      <Head>
        <title>Fase 1 - Comunicação Assertiva | Temáticos for Business</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white px-6 py-10">
        <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl border border-white/20">
          <h1 className="text-3xl font-bold text-pink-400 mb-4">Fase 1 – A Missão da Comunicação Assertiva</h1>
          
          {/* Storytelling */}
          <div className="mb-6 text-white/80">
            <p className="mb-2">Você é o novo líder de uma equipe que acabou de enfrentar uma crise com um cliente. Os relatórios atrasaram e os ânimos estão à flor da pele. A diretoria espera que você assuma a responsabilidade e traga clareza para o time.</p>
            <p>Seu desafio é: se posicionar com firmeza, empatia e respeito — sem gerar mais tensão.</p>
          </div>

          {/* Conceito explicativo */}
          <div className="bg-white/10 p-4 rounded-lg border border-white/10 mb-6">
            <h2 className="text-xl font-semibold text-pink-300 mb-2">📘 O que é Comunicação Assertiva?</h2>
            <p className="text-white/80">
              Ser assertivo é expressar suas opiniões, sentimentos e necessidades de forma clara, direta e respeitosa. 
              Você não ignora o outro, mas também não se anula. Está no meio entre a agressividade e a passividade.
            </p>
          </div>

          {/* Desafio prático */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-3 text-pink-300">🎯 Desafio:</h2>
            <p className="text-white/80 mb-4">Como você responderia a um colaborador que atrasou novamente um relatório?</p>
            <div className="space-y-4">
              <label className="block">
                <input type="radio" name="resposta" onChange={() => setResposta('agressiva')} />
                <span className="ml-2">“Você sempre atrasa tudo! Assim é impossível confiar no seu trabalho!”</span>
              </label>
              <label className="block">
                <input type="radio" name="resposta" onChange={() => setResposta('passiva')} />
                <span className="ml-2">“Tudo bem, depois você envia, sem problemas.”</span>
              </label>
              <label className="block">
                <input type="radio" name="resposta" onChange={() => setResposta('assertiva')} />
                <span className="ml-2">“Notei que o relatório não foi entregue no prazo. Gostaria de entender se houve algum impedimento para que possamos alinhar juntos.”</span>
              </label>
            </div>
          </div>

          <button
            onClick={verificarResposta}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          >
            Verificar Resposta
          </button>

          {feedback && (
            <div className="mt-6 p-4 rounded-lg bg-white/10 border border-white/20 text-white">
              {feedback}
              {resposta === 'assertiva' && (
                <div className="mt-4">
                  <button
                    onClick={() => router.push('/fases/fase2')}
                    className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-white"
                  >
                    Avançar para próxima fase
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}