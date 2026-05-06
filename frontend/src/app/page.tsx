"use client";
import Sidebar from '../components/Sidebar';

export default function Home() {
  const stats = [
    { title: 'Platos Activos', value: '24', color: 'border-l-purple-500' },
    { title: 'Pedidos de Hoy', value: '15', color: 'border-l-blue-500' },
    { title: 'Categorías', value: '6', color: 'border-l-pink-500' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      
      <main className="ml-64 p-10 w-full">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800">Panel de Gestión</h2>
            <p className="text-slate-500">Bienvenida de nuevo, Wendy.</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105 font-bold">
            + Nuevo Producto
          </button>
        </header>

        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.title} className={`bg-white p-8 rounded-3xl shadow-sm border-l-8 ${stat.color} hover:shadow-md transition-shadow`}>
              <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-sm">{stat.title}</h3>
              <p className="text-5xl font-black text-slate-800 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Aquí iría la tabla de platos más adelante */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm p-8 border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Últimos movimientos</h3>
          <div className="h-40 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
            Aquí aparecerá la lista de tus platos cuando conectemos el backend.
          </div>
        </div>
      </main>
    </div>
  );
}