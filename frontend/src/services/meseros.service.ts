import { api } from "@/lib/api";

export interface Mesero { id: number; nombre: string; telefono?: string; }
export type CreateMeseroDto = Omit<Mesero, "id">;
export type UpdateMeseroDto = Partial<CreateMeseroDto>;

export const meserosService = {
  findAll: () => api.get<Mesero[]>("/meseros"),
  create: (data: CreateMeseroDto) => api.post<Mesero>("/meseros", data),
  update: (id: number, data: UpdateMeseroDto) => api.put<Mesero>(`/meseros/${id}`, data),
};
