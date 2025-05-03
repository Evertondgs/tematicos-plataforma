// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const rotaAtual = router.pathname;

  const sair = () => {
    localStorage.clear();
    router.push('/login');
  };

  const menuItem = (label, href) => (
    <Link
      href={href}
      className={`block px-4 py-2 text-sm hover:underline ${rotaAtual === href ? 'text-pink-400 font-bold' : ''}`}
    >
      {label}
    </Link>
  );

  if (rotaAtual === '/login') return null;

  return (
    <header className="bg-white/10 text-white px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-white/20">
      <div className="font-bold text-xl text-center sm:text-left">🎓 Temáticos</div>
      <nav className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center">
        {menuItem('Início', '/dashboard')}
        {menuItem('Trilhas', '/trilhas/formacao-de-gestores')}
        {menuItem('Perfil', '#')}
        <button
          onClick={sair}
          className="mt-2 sm:mt-0 px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white text-sm"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}