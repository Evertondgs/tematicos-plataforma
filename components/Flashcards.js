// components/Flashcards.js
import { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');
  const [modoEstudo, setModoEstudo] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [mostrarVerso, setMostrarVerso] = useState(false);

  // 🔄 Carrega os flashcards do Firestore ao montar
  useEffect(() => {
    const carregarFlashcards = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const dados = docSnap.data();
          if (dados.flashcards) {
            setFlashcards(dados.flashcards);
          }
        }
      }
    };

    carregarFlashcards();
  }, []);

  // ✅ Adiciona novo flashcard e salva no Firestore
  const criarFlashcard = async () => {
    if (frente.trim() && verso.trim()) {
      const novos = [...flashcards, { frente, verso }];
      setFlashcards(novos);
      setFrente('');
      setVerso('');

      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, 'usuarios', user.uid),
          { flashcards: novos },
          { merge: true }
        );
      }
    }
  };

  const iniciarEstudo = () => {
    if (flashcards.length > 0) {
      setModoEstudo(true);
      setIndiceAtual(0);
      setMostrarVerso(false);
    }
  };

  const proximoCard = () => {
    if (indiceAtual < flashcards.length - 1) {
      setIndiceAtual(indiceAtual + 1);
      setMostrarVerso(false);
    }
  };

  const voltarCard = () => {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
      setMostrarVerso(false);
    }
  };

  const alternarLado = () => {
    setMostrarVerso(!mostrarVerso);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
      {!modoEstudo ? (
        <>
          <h2 className="text-xl font-bold mb-4">Criar Flashcards</h2>
          <input
            type="text"
            placeholder="Frente"
            value={frente}
            onChange={(e) => setFrente(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Verso"
            value={verso}
            onChange={(e) => setVerso(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={criarFlashcard}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Adicionar Flashcard
          </button>
          <button
            onClick={iniciarEstudo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Iniciar Estudo
          </button>

          {flashcards.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Lista de Flashcards</h3>
              <ul className="space-y-2">
                {flashcards.map((card, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
                    <strong>{index + 1}.</strong> {card.frente} – {card.verso}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Modo Estudo</h2>
          <div
            onClick={alternarLado}
            className="cursor-pointer border p-6 mb-4 rounded-lg shadow hover:bg-gray-100 text-center text-xl transition"
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
