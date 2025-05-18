// components/Anotacoes.js
import { useState } from 'react';

export default function Anotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const criarAnotacao = () => {
    if (titulo.trim() && conteudo.trim()) {
      const novaAnotacao = {
        id: Date.now(),
        titulo,
        conteudo,
      };
      setAnotacoes([...anotacoes, novaAnotacao]);
      setTitulo('');
      setConteudo('');
    }
  };

  const removerAnotacao = (id) => {
    setAnotacoes(anotacoes.filter((anotacao) => anotacao.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Criar Anotações</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Conteúdo"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        rows="4"
      />
      <button
        onClick={criarAnotacao}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Salvar Anotação
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Minhas Anotações</h3>
        <ul className="space-y-4 mt-4">
          {anotacoes.map((anotacao) => (
            <li key={anotacao.id} className="bg-gray-100 p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">{anotacao.titulo}</h4>
                <button
                  onClick={() => removerAnotacao(anotacao.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </div>
              <p>{anotacao.conteudo}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
