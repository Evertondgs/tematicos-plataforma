export default function Perfil() {
  const trilhaId = typeof window !== 'undefined' ? localStorage.getItem('trilhaSelecionada') : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Perfil do Usuário</h1>
      <p><strong>Trilha atual:</strong> {trilhaId ? trilhaId : 'Nenhuma trilha selecionada'}</p>
    </div>
  );
}