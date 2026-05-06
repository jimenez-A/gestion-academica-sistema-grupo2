// frontend/src/lib/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

// Función request corregida y completa
export async function request<T>(url: string, method: HttpMethod = "GET", data?: any): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(`${BASE_URL}${url}`, options);
  
  if (!response.ok) {
    throw new Error('Error en la petición API');
  }

  const result = await response.json();
  return result; // ¡Este es el return que faltaba para que no sea undefined!
}

export const api = {
  get: <T>(url: string): Promise<T> => request<T>(url, "GET"),
  post: <T>(url: string, data: any): Promise<T> => request<T>(url, "POST", data),
  put: <T>(url: string, data: any): Promise<T> => request<T>(url, "PUT", data),
  delete: <T>(url: string): Promise<T> => request<T>(url, "DELETE"),
  patch: <T>(url: string, data: any): Promise<T> => request<T>(url, "PATCH", data),
};
