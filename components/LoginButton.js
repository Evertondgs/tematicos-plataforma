
// components/LoginButton.js

import { auth, provider } from '../lib/firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
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
          <img src={user.photoURL} alt="Avatar" style={{ width: 60, borderRadius: '50%' }} />
        </div>
      )}
    </div>
  );
}
