import { useEffect, useState } from 'react';
import { auth, provider } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export default function LoginButton() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4 text-center">
      {!user ? (
        <button
          onClick={login}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold rounded-lg shadow transition transform hover:scale-105"
        >
          Entrar com Google
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-lg font-medium">Olá, {user.displayName}!</p>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Avatar"
              className="w-16 h-16 rounded-full shadow border-2 border-white"
            />
          )}
          <button
            onClick={logout}
            className="mt-2 px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400 transition"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}