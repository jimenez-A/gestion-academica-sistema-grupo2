import { api } from "@/lib/api";

export interface Ingrediente { id: number; nombre: string; cantidadStock: number; unidadMedida: string; }
export type CreateIngredienteDto = Omit<Ingrediente, "id">;

export const ingredientesService = {
  findAll: () => api.get<Ingrediente[]>("/ingredientes"),
  updateStock: (id: number, cantidad: number) => api.patch<Ingrediente>(`/ingredientes/${id}/stock`, { cantidad }),
};