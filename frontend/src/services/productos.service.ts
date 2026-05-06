import { api } from "@/lib/api";

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
}

export type CreateProductoDto = Omit<Producto, "id">;
export type UpdateProductoDto = Partial<CreateProductoDto>;

export const productosService = {
  findAll: () => api.get<Producto[]>("/productos"),
  findOne: (id: number) => api.get<Producto>(`/productos/${id}`),
  create: (data: CreateProductoDto) =>
    api.post<Producto>("/productos", data),
  update: (id: number, data: UpdateProductoDto) =>
    api.put<Producto>(`/productos/${id}`, data),
  remove: (id: number) => api.delete<void>(`/productos/${id}`),
};
