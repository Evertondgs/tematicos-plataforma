// components/Layout.js
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}
