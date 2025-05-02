import { useRouter } from 'next/router';

export default function Fase() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Fase {id}</h1>
      <p>Conteúdo da fase {id} será exibido aqui.</p>
      <button onClick={() => router.back()} className="mt-6 bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white">
        Voltar
      </button>
    </div>
  );
}