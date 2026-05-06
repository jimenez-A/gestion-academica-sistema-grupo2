import { api } from "@/lib/api";

export interface Mesa { id: number; numero: number; capacidad: number; estado: string; }
export type CreateMesaDto = Omit<Mesa, "id">;
export type UpdateMesaDto = Partial<CreateMesaDto>;

export const mesasService = {
  findAll: () => api.get<Mesa[]>("/mesas"),
  create: (data: CreateMesaDto) => api.post<Mesa>("/mesas", data),
  update: (id: number, data: UpdateMesaDto) => api.put<Mesa>(`/mesas/${id}`, data),
};
