
// pages/login.js

import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('../components/LoginButton'), { ssr: false });

export default function Login() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Login no Temáticos</h1>
      <LoginButton />
    </div>
  );
}
