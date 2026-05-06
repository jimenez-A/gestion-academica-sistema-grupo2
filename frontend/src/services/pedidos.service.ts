import { api } from "@/lib/api";

export interface Pedido { id: number; mesaId: number; meseroId: number; total: number; estado: string; }
export type CreatePedidoDto = Omit<Pedido, "id">;

export const pedidosService = {
  findAll: () => api.get<Pedido[]>("/pedidos"),
  create: (data: CreatePedidoDto) => api.post<Pedido>("/pedidos", data),
  updateStatus: (id: number, estado: string) => api.patch<Pedido>(`/pedidos/${id}/estado`, { estado }),
};
