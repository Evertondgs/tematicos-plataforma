// components/Layout.js
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}