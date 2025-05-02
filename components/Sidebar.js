// components/Sidebar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Sidebar() {
  const router = useRouter();
  const rotaAtual = router.pathname;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  const menuItem = (label, href, icon) => (
    <Link href={href} className={`flex items-center gap-2 px-4 py-2 rounded transition hover:bg-pink-100 ${rotaAtual === href ? 'bg-pink-200 text-pink-900 font-bold' : 'text-white/80'}`}>
      <span>{icon}</span> {label}
    </Link>
  );

  return (
    <aside className="bg-blue-900 text-white w-64 min-h-screen p-4 space-y-4">
      <div className="text-xl font-extrabold tracking-wide mb-6">TEMÁTICOS</div>
      <nav className="flex flex-col space-y-2">
        {menuItem('Dashboard', '/dashboard', '📊')}
        {menuItem('Minhas Trilhas', '/trilhas/formacao-de-gestores', '🎯')}
        {menuItem('Progresso', '/progresso', '📈')}
        {menuItem('Descobrir', '/descobrir', '🔍')}
      </nav>
      <div className="mt-10 border-t border-white/20 pt-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm text-left text-red-300 hover:bg-red-100 hover:text-red-700 transition rounded w-full"
        >
          <span>🚪</span> Sair
        </button>
      </div>
    </aside>
  );
}
