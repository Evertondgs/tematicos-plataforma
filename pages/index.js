// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Temáticos</title>
      </Head>
      <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>Bem-vindo ao Temáticos</h1>
      </main>
    </>
  );
}