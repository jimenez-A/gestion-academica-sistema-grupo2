"use client";
import Sidebar from '../../components/Sidebar';

export default function DashboardPage() {
  const stats = [
    { title: 'Ingresos Hoy', value: '$450.000', color: 'bg-green-500', text: 'text-green-500' },
    { title: 'Platos Vendidos', value: '86', color: 'bg-purple-500', text: 'text-purple-500' },
    { title: 'Nuevos Clientes', value: '12', color: 'bg-blue-500', text: 'text-blue-500' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <header className="mb-10">
          <h2 className="text-3xl font-black text-slate-800">Panel de Control</h2>
          <p className="text-slate-500 font-medium">Bienvenida de nuevo al sistema de gestión.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${stat.color}`}></div>
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider">{stat.title}</h3>
              <p className="text-4xl font-black text-slate-800 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
          <h3 className="text-xl font-bold mb-2">Estado del Servidor</h3>
          <p className="text-slate-400 text-sm mb-4">Base de datos PostgreSQL conectada correctamente.</p>
          <div className="flex gap-2">
            <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-green-500">SISTEMA ONLINE</span>
          </div>
        </div>
      </main>
    </div>
  );
}