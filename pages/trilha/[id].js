import { useRouter } from 'next/router';
import { trilhas } from '../../lib/mockData';

export default function Trilha() {
  const router = useRouter();
  const { id } = router.query;
  const trilha = trilhas.find(t => t.id === id);

  if (!trilha) return <p className="text-white p-6">Trilha não encontrada.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-blue-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{trilha.nome}</h1>
      <div className="space-y-4">
        {trilha.fases.map((fase) => (
          <div key={fase.id} className="bg-white/10 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{fase.titulo}</h2>
            <button onClick={() => router.push(`/fase/${fase.id}`)} className="mt-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-white">
              Acessar Fase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}