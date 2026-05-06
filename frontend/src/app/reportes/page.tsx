"use client";
import Sidebar from '../../components/Sidebar';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

export default function ReportesPage() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <header className="mb-10">
          <h2 className="text-3xl font-black text-slate-800">Reportes y Análisis</h2>
          <p className="text-slate-500 font-medium">Rendimiento académico del Restaurante Corhuila.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card de Ventas */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Ventas Semanales</h3>
            </div>
            <div className="h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-medium italic">[ Gráfico de barras aquí ]</p>
            </div>
          </div>

          {/* Card de Platos Top */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Platos Más Vendidos</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="font-semibold text-slate-700">1. Bandeja Paisa</span>
                <span className="bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold">45 ped.</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="font-semibold text-slate-700">2. Mojarra Frita</span>
                <span className="bg-slate-400 text-white px-3 py-1 rounded-lg text-xs font-bold">32 ped.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
