import { api } from "@/lib/api";

export interface Categoria { id: number; nombre: string; descripcion?: string; }
export type CreateCategoriaDto = Omit<Categoria, "id">;
export type UpdateCategoriaDto = Partial<CreateCategoriaDto>;

export const categoriasService = {
  findAll: () => api.get<Categoria[]>("/categorias"),
  findOne: (id: number) => api.get<Categoria>(`/categorias/${id}`),
  create: (data: CreateCategoriaDto) => api.post<Categoria>("/categorias", data),
  update: (id: number, data: UpdateCategoriaDto) => api.put<Categoria>(`/categorias/${id}`, data),
  remove: (id: number) => api.delete<void>(`/categorias/${id}`),
};
