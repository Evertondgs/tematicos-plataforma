import Link from 'next/link';
import { useState } from 'react';
import {
  LayoutPanelLeft,
  Home,
  Target,
  Brain,
  FileText,
  Search,
  BookOpen,
} from 'lucide-react';

export default function Sidebar() {
  const [expandido, setExpandido] = useState(false);
  const toggleSidebar = () => setExpandido(!expandido);

  const itensMenu = [
    { nome: 'Início', icone: <Home size={20} />, href: '/dashboard' },
    { nome: 'Trilhas', icone: <Target size={20} />, href: '/trilhas/formacao-de-gestores' },
    { nome: 'Painel de Aprendizagem', icone: <Brain size={20} />, href: '/painel-aprendizagem' },
    { nome: 'Progresso', icone: <FileText size={20} />, href: '/progresso' },
    { nome: 'Descobrir', icone: <Search size={20} />, href: '/descobrir' },
  ];

  return (
    <aside className={`h-screen bg-blue-900 text-white flex flex-col transition-all duration-300 ${expandido ? 'w-64' : 'w-16'} shadow-lg`}>
      {/* Botão de expansão */}
      <div className="flex items-center justify-center h-16 cursor-pointer hover:bg-blue-800" onClick={toggleSidebar}>
        <LayoutPanelLeft size={24} />
      </div>

      {/* Navegação */}
      <nav className="flex flex-col flex-grow space-y-2 mt-4">
        {itensMenu.map((item, index) => (
          <Link key={index} href={item.href} className="flex items-center px-4 py-3 hover:bg-blue-800 transition">
            <div className="w-6">{item.icone}</div>
            {expandido && <span className="ml-3 text-sm">{item.nome}</span>}
          </Link>
        ))}
      </nav>

      {/* Rodapé */}
      <div className="mt-auto mb-4 px-4">
        <Link href="/biblioteca" className="flex items-center py-3 hover:bg-blue-800 transition">
          <div className="w-6">
            <BookOpen size={20} />
          </div>
          {expandido && <span className="ml-3 text-sm">Biblioteca</span>}
        </Link>
      </div>
    </aside>
  );
}
