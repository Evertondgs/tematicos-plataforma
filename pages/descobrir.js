import { trilhas } from '../lib/mockData';
import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Descobrir() {
  const router = useRouter();

  const escolherTrilha = (id) => {
    localStorage.setItem('trilhaSelecionada', id);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Escolha sua trilha de aprendizado</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {trilhas.map((trilha) => (
          <div key={trilha.id} className="bg-white/10 p-4 rounded-lg shadow hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold">{trilha.nome}</h2>
            <p>{trilha.fases.length} fases</p>
            <button onClick={() => escolherTrilha(trilha.id)} className="mt-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-white">
              Começar trilha
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}