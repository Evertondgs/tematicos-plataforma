import Head from 'next/head'
import dynamic from 'next/dynamic'

const LoginButton = dynamic(() => import('../components/LoginButton'), { ssr: false })

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Temáticos</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 flex items-center justify-center text-white relative overflow-hidden px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-stars bg-cover opacity-20"></div>
        <div className="z-10 max-w-3xl bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-10 shadow-2xl text-center border border-white/20">
          <img src="/logo-lampada.png" alt="Logo Temáticos" className="w-20 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-extrabold text-pink-400 mb-2">Bem-vindo ao Temáticos</h1>
          <p className="text-purple-100 mb-6">Comece sua jornada de conhecimento jogando!</p>
          <LoginButton />
          <img src="/personagem-login.png" alt="Personagem Gamificado" className="mt-10 mx-auto w-64" />
        </div>
      </main>
    </>
  )
}