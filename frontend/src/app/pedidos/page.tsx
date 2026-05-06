"use client";
import Sidebar from '../../components/Sidebar';

export default function PedidosPage() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <h2 className="text-3xl font-extrabold text-slate-800">Pedidos Hoy</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <p className="text-blue-100 uppercase text-xs font-bold">Pendientes</p>
            <p className="text-4xl font-black">05</p>
          </div>
          <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
            <p className="text-slate-400 uppercase text-xs font-bold">En cocina</p>
            <p className="text-4xl font-black">02</p>
          </div>
        </div>
      </main>
    </div>
  );
}
