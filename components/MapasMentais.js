// components/MapasMentais.js
import { useState } from 'react';

export default function MapasMentais() {
  const [mapa, setMapa] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const criarNo = () => {
    if (titulo.trim() && descricao.trim()) {
      const novoNo = {
        id: Date.now(),
        titulo,
        descricao,
        filhos: [],
      };
      setMapa([...mapa, novoNo]);
      setTitulo('');
      setDescricao('');
    }
  };

  const adicionarFilho = (id) => {
    const filhoTitulo = prompt("Título do nó filho:");
    const filhoDescricao = prompt("Descrição do nó filho:");
    if (filhoTitulo && filhoDescricao) {
      setMapa((prevMapa) =>
        prevMapa.map((no) =>
          no.id === id
            ? {
                ...no,
                filhos: [...no.filhos, { id: Date.now(), titulo: filhoTitulo, descricao: filhoDescricao }],
              }
            : no
        )
      );
    }
  };

  const renderizarMapa = (nodo) => (
    <div className="ml-4 mt-2">
      <div className="bg-gray-200 p-3 rounded-lg shadow-md mb-2">
        <h3 className="text-lg font-semibold">{nodo.titulo}</h3>
        <p>{nodo.descricao}</p>
        <button
          onClick={() => adicionarFilho(nodo.id)}
          className="mt-2 text-sm bg-blue-500 text-white px-2 py-1 rounded"
        >
          Adicionar Filho
        </button>
      </div>
      <div className="ml-4">
        {nodo.filhos.map((filho) => renderizarMapa(filho))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Mapas Mentais</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        rows="2"
      />
      <button
        onClick={criarNo}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Adicionar Nó Principal
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Estrutura do Mapa Mental</h3>
        <div className="mt-4">
          {mapa.map((nodo) => renderizarMapa(nodo))}
        </div>
      </div>
    </div>
  );
}
