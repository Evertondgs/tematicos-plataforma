// components/RevisaoEspacada.js
import { useState } from 'react';

export default function RevisaoEspacada() {
  const [revisoes, setRevisoes] = useState([]);
  const [conteudo, setConteudo] = useState('');
  const [dataRevisao, setDataRevisao] = useState('');

  const adicionarRevisao = () => {
    if (conteudo.trim() && dataRevisao.trim()) {
      const novaRevisao = {
        id: Date.now(),
        conteudo,
        dataRevisao,
        revisado: false,
      };
      setRevisoes([...revisoes, novaRevisao]);
      setConteudo('');
      setDataRevisao('');
    }
  };

  const marcarComoRevisado = (id) => {
    setRevisoes((prevRevisoes) =>
      prevRevisoes.map((rev) =>
        rev.id === id ? { ...rev, revisado: true } : rev
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Revisão Espaçada</h2>
      <textarea
        placeholder="Conteúdo para Revisão"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        rows="2"
      />
      <input
        type="date"
        value={dataRevisao}
        onChange={(e) => setDataRevisao(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={adicionarRevisao}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Adicionar Revisão
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Revisões Programadas</h3>
        <ul className="mt-4 space-y-3">
          {revisoes.map((rev) => (
            <li
              key={rev.id}
              className={`p-3 rounded-lg shadow-md ${
                rev.revisado ? 'bg-green-200' : 'bg-gray-100'
              }`}
            >
              <p className="text-sm">{rev.conteudo}</p>
              <p className="text-xs text-gray-500">Data: {rev.dataRevisao}</p>
              {!rev.revisado && (
                <button
                  onClick={() => marcarComoRevisado(rev.id)}
                  className="mt-2 text-sm bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Marcar como Revisado
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
