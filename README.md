# 🍔 Plataforma de Pedidos de Comida a Domicilio

**Proyecto full-stack guiado por el docente · Programación Avanzada 2026A**
Corporación Universitaria del Huila — CORHUILA · Ingeniería Mecatrónica

![NestJS](https://img.shields.io/badge/NestJS-10-red)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![Docker](https://img.shields.io/badge/Docker-latest-blue)
![Prisma](https://img.shields.io/badge/Prisma-7.5-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

![Issues](https://img.shields.io/badge/Issues-10_closed-success)
![Estado](https://img.shields.io/badge/Estado-Finalizado-success)
![Sprints](https://img.shields.io/badge/Sprints-5_completos-success)

---

## 👥 Grupo 2

**Integrantes:**

* Wendy Carolina Gomez
* Ana Sofia Jimenez

---

## 📌 Estado del Proyecto

**Estado actual:** Finalizado ✅
**Progreso:** Todas las historias de usuario implementadas y validadas

---

## 📋 Tabla de Contenidos

* 🚀 Inicio 
* 📖 Descripción del Proyecto
* 🛠 Stack Tecnológico
* 🏗 Arquitectura
* 📊 Modelo de Datos
* 🚀 Plan de Sprints
* 📌 Casos de Uso
* 📌 Historias de Usuario
* 📅 Cronograma
* ✅ Definition of Done (DoD)

---

## 🚀 Inicio 

### Prerrequisitos

* Git
* Docker Desktop
* Node.js 22 LTS

```bash
# Clonar repositorio
git clone <repo-url>
cd plataforma-delivery

# Levantar servicios
docker compose up --build
```

📍 Servicios:

* Frontend → http://localhost:3000
* Backend → http://localhost:3001/api

---

## 📖 Descripción del Proyecto

Una empresa local de delivery desea crear su propia plataforma web para conectar restaurantes con clientes.

Actualmente, los pedidos se gestionaban por **WhatsApp y llamadas**, lo que generaba errores en las órdenes y tiempos de respuesta lentos.

El sistema desarrollado permite:

* 🍽️ Publicación de menús
* 🛒 Pedidos en línea
* 🚴 Gestión de repartidores
* 📍 Seguimiento en tiempo real

---

## 🛠 Stack Tecnológico

| Capa          | Tecnología           |
| ------------- | -------------------- |
| Backend       | NestJS + TypeScript  |
| Frontend      | Next.js + TypeScript |
| Base de datos | PostgreSQL           |
| ORM           | Prisma               |
| Contenedores  | Docker               |

---

## 🏗 Arquitectura

Cliente → Controller → Service → Repository → Base de Datos

Arquitectura en capas que separa responsabilidades y facilita mantenimiento.

---

## 📊 Modelo de Datos

Relaciones principales:

* Cliente 1 ──── N Pedido
* Restaurante 1 ──── N Producto
* Pedido 1 ──── N Productos
* Pedido 1 ──── 1 Repartidor

---

## 🚀 Plan de Sprints

| Sprint   | Alcance                  |
| -------- | ------------------------ |
| Sprint 1 | Restaurantes y Menús     |
| Sprint 2 | Clientes y Pedidos       |
| Sprint 3 | Repartidores y estados   |
| Sprint 4 | Frontend y navegación    |
| Sprint 5 | Integración y despliegue |

---

## 📌 Casos de Uso

### CU-01 — Registrar Restaurante

Registrar nombre, dirección, categoría de cocina y horario de atención.

### CU-02 — Gestionar Menú

Administrar productos, precios y disponibilidad.

### CU-03 — Crear Pedido

Seleccionar restaurante, productos y dirección de entrega.

### CU-04 — Gestionar Entrega

Asignar repartidor y actualizar estado del pedido: preparando, en camino, entregado.

### CU-05 — Historial de Pedidos

Consultar pedidos anteriores con detalle y total pagado.

---

## 📌 Historias de Usuario

* **HU-01:** Gestión de Restaurantes
* **HU-02:** Gestión de Menús y Productos
* **HU-03:** Gestión de Clientes
* **HU-04:** Gestión de Repartidores
* **HU-05:** Creación de Pedidos
* **HU-06:** Asignación de Repartidor
* **HU-07:** Actualización del Estado del Pedido
* **HU-08:** Historial de Pedidos
* **HU-09:** Módulo común (validaciones, interceptores y pipes)
* **HU-10:** Navegación y layout responsive

---

## 📅 Cronograma

| Sprint   | Periodo    |
| -------- | ---------- |
| Sprint 1 | Semana 1-2 |
| Sprint 2 | Semana 3-4 |
| Sprint 3 | Semana 5   |
| Sprint 4 | Semana 6   |
| Sprint 5 | Semana 7   |

---

## ✅ Definition of Done (DoD)

Una historia de usuario se considera terminada cuando cumple:

### Backend

* Endpoints implementados correctamente
* Validaciones con DTOs
* Manejo adecuado de errores

### Frontend

* Interfaz funcional
* Formularios operativos
* Consumo correcto de API

### General

* Código sin errores
* Integración funcional
* Pruebas realizadas correctamente

---

