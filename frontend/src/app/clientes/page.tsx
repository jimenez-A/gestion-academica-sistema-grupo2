"use client";
import Sidebar from '../../components/Sidebar';

export default function ClientesPage() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <h2 className="text-3xl font-extrabold text-slate-800">Base de Clientes</h2>
        <p className="text-slate-500 mb-6">Listado de usuarios registrados.</p>
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Nombre</th>
                <th className="p-4 font-semibold text-slate-600">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-slate-700">Wendy Gómez</td>
                <td className="p-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Activo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}