"use client";
import { Utensils, ClipboardList, Users, Home, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menu = [
    { name: 'Dashboard', icon: <Home size={20}/>, path: '/' },
    { name: 'Menú/Platos', icon: <Utensils size={20}/>, path: '/menu' },
    { name: 'Pedidos', icon: <ClipboardList size={20}/>, path: '/pedidos' },
    { name: 'Clientes', icon: <Users size={20}/>, path: '/clientes' },
    { name: 'Reportes', icon: <BarChart3 size={20}/>, path: '/reportes' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-6 shadow-xl z-50">
      <div className="mb-10 text-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent uppercase">
          Restaurante Corhuila
        </h1>
      </div>
      <nav className="space-y-4">
        {menu.map((item) => (
          <Link key={item.name} href={item.path} className="block">
            <div className="flex items-center gap-4 p-3 hover:bg-slate-800 rounded-xl cursor-pointer transition-all hover:translate-x-2 text-slate-300 hover:text-white">
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
