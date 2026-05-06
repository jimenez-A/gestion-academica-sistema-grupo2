"use client";
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

// 1. Definimos cómo es un Plato según tu base de datos
interface Plato {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

export default function MenuPage() {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [cargando, setCargando] = useState(true);

  // 2. Esta función se ejecuta apenas entras a la página
  useEffect(() => {
    const obtenerPlatos = async () => {
      try {
        // Llamamos al endpoint que vimos en tu terminal de NestJS
        const respuesta = await fetch('http://localhost:3000/restaurantes'); 
        const datos = await respuesta.json();
        setPlatos(datos);
      } catch (error) {
        console.error("Error al conectar con el backend:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerPlatos();
  }, []);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <header className="mb-8">
          <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
            Gestión de Menú
          </h2>
          <p className="text-slate-500 font-medium">Sincronizado con PostgreSQL</p>
        </header>

        {cargando ? (
          <div className="flex items-center gap-3 text-purple-600 font-bold animate-pulse">
            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            Consultando base de datos...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platos.map((plato) => (
              <div key={plato.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-slate-800">{plato.nombre}</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full border border-green-200">
                    ${plato.precio}
                  </span>
                </div>
                <p className="text-slate-500 text-sm italic">
                  {plato.descripcion || "Sin descripción"}
                </p>
              </div>
            ))}

            {platos.length === 0 && (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium italic">
                  La conexión fue exitosa, pero no hay platos guardados aún.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
