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
    <Link href={href} className={`px-4 py-2 hover:underline \${rotaAtual === href ? 'text-pink-400 font-bold' : ''}`}>
      {label}
    </Link>
  );

  if (rotaAtual === '/login') return null;

  return (
    <header className="bg-white/10 text-white px-6 py-4 flex justify-between items-center border-b border-white/20">
      <div className="font-bold text-xl">🎓 Temáticos</div>
      <nav className="space-x-4">
        {menuItem('Início', '/dashboard')}
        {menuItem('Trilhas', '/descobrir')}
        {menuItem('Perfil', '/perfil')}
        <button onClick={sair} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white text-sm">
          Sair
        </button>
      </nav>
    </header>
  );
}