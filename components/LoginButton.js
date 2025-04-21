// components/LoginButton.js
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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!user ? (
        <button onClick={login} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Entrar com Google
        </button>
      ) : (
        <div>
          <p>Olá, {user.displayName}!</p>
          {user.photoURL && (
            <img src={user.photoURL} alt="Avatar" style={{ width: 60, borderRadius: '50%' }} />
          )}
          <br />
          <button onClick={logout} style={{ padding: '8px 16px', marginTop: '10px', backgroundColor: '#ccc', border: 'none', borderRadius: 6 }}>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}