import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';
import { Pencil, Trash2 } from 'lucide-react';

export default function Flashcards() {
  const [userId, setUserId] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');
  const [modoEstudo, setModoEstudo] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [mostrarVerso, setMostrarVerso] = useState(false);
  const [editando, setEditando] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const cardsRef = collection(db, 'usuarios', userId, 'flashcards');
    const carregarFlashcards = async () => {
      try {
        const snapshot = await getDocs(cardsRef);
        const lista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFlashcards(lista);
      } catch (error) {
        console.error('Erro ao carregar flashcards:', error);
      } finally {
        setCarregando(false);
      }
    };

    carregarFlashcards();
  }, [userId]);

  const criarOuAtualizar = async () => {
    if (!frente.trim() || !verso.trim() || !userId) return;

    const cardsRef = collection(db, 'usuarios', userId, 'flashcards');

    if (editando !== null) {
      const cardEditado = flashcards[editando];
      const novoCard = { frente, verso };
      await updateDoc(doc(cardsRef, cardEditado.id), novoCard);

      const atualizados = [...flashcards];
      atualizados[editando] = { ...cardEditado, ...novoCard };
      setFlashcards(atualizados);
      setEditando(null);
    } else {
      const docRef = await addDoc(cardsRef, { frente, verso });
      setFlashcards([...flashcards, { id: docRef.id, frente, verso }]);
    }

    setFrente('');
    setVerso('');
  };

  const excluirCard = async (index) => {
    const cardsRef = collection(db, 'usuarios', userId, 'flashcards');
    const card = flashcards[index];
    await deleteDoc(doc(cardsRef, card.id));
    const atualizados = flashcards.filter((_, i) => i !== index);
    setFlashcards(atualizados);
    if (modoEstudo && atualizados.length === 0) setModoEstudo(false);
  };

  const editarCard = (index) => {
    setFrente(flashcards[index].frente);
    setVerso(flashcards[index].verso);
    setEditando(index);
  };

  const iniciarEstudo = () => {
    if (flashcards.length > 0) {
      setModoEstudo(true);
      setIndiceAtual(0);
      setMostrarVerso(false);
    }
  };

  const voltarCard = () => {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
      setMostrarVerso(false);
    }
  };

  const proximoCard = () => {
    if (indiceAtual < flashcards.length - 1) {
      setIndiceAtual(indiceAtual + 1);
      setMostrarVerso(false);
    }
  };

  const alternarLado = () => {
    setMostrarVerso(!mostrarVerso);
  };

  if (carregando) {
    return (
      <div className="bg-white bg-opacity-10 text-white p-6 rounded-lg shadow-md">
        Carregando...
      </div>
    );
  }

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      {!modoEstudo ? (
        <>
          <h2 className="text-xl font-bold mb-4">Criar Flashcards</h2>
          <input
            type="text"
            placeholder="Frente (Pergunta)"
            value={frente}
            onChange={(e) => setFrente(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Verso (Resposta)"
            value={verso}
            onChange={(e) => setVerso(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={criarOuAtualizar}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {editando !== null ? 'Salvar Alterações' : 'Adicionar Flashcard'}
            </button>
            <button
              onClick={iniciarEstudo}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={flashcards.length === 0}
            >
              Iniciar Estudo
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Lista de Flashcards</h3>
            <ul className="space-y-2">
              {flashcards.map((card, index) => (
                <li
                  key={card.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded"
                >
                  <div>
                    <strong>{index + 1}.</strong> {card.frente}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editarCard(index)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => excluirCard(index)}
                      className="text-red-600 hover:text-red-800"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Modo Estudo</h2>
          <div
            onClick={alternarLado}
            className="cursor-pointer border p-6 mb-4 rounded-lg shadow text-center text-xl bg-gray-100"
          >
            {mostrarVerso
              ? flashcards[indiceAtual].verso
              : flashcards[indiceAtual].frente}
          </div>
          <div className="flex justify-between">
            <button
              onClick={voltarCard}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Voltar
            </button>
            <button
              onClick={proximoCard}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Próximo
            </button>
          </div>
        </>
      )}
    </div>
  );
}
