import { api } from "@/lib/api";

export interface Cliente { id: number; nombre: string; telefono: string; email?: string; }
export type CreateClienteDto = Omit<Cliente, "id">;

export const clientesService = {
  findAll: () => api.get<Cliente[]>("/clientes"),
  create: (data: CreateClienteDto) => api.post<Cliente>("/clientes", data),
};
