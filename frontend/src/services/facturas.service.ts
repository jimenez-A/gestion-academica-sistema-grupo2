import { api } from "@/lib/api";

export interface Factura { id: number; pedidoId: number; fecha: string; montoTotal: number; }
export type CreateFacturaDto = Omit<Factura, "id" | "fecha">;

export const facturasService = {
  findAll: () => api.get<Factura[]>("/facturas"),
  create: (data: CreateFacturaDto) => api.post<Factura>("/facturas", data),
};
