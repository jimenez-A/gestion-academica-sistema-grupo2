# 🎓 Sistema de Gestión Académica

Proyecto full-stack desarrollado por el **Grupo 2 de Programación Avanzada 2026A**

🚀 **Tecnologías:** NestJS · Next.js · PostgreSQL · Docker · Prisma  

---

## 👥 Integrantes

- Ana Sofía Jiménez Ostos  
- Wendy Carolina Gómez Suache  

🎓 **Programa:** Ingeniería Mecatrónica  

---

## 📋 Tabla de Contenidos

- 📖 Descripción del Proyecto  
- 🛠 Stack Tecnológico  
- 🏗 Arquitectura  
- 📊 Modelo de Datos  
- 🚀 Funcionalidades  
- ⚙️ Instalación y Ejecución  
- 📌 Notas  

---

## 📖 Descripción del Proyecto

El **Sistema de Gestión Académica** es una aplicación web full-stack que permite administrar procesos educativos dentro de una institución, incluyendo estudiantes, docentes, asignaturas, matrículas y calificaciones.

Este proyecto tiene como objetivo aplicar conceptos de **programación avanzada**, arquitectura en capas y desarrollo moderno con tecnologías actuales.

---

## 🚀 Funcionalidades Principales

✅ CRUD de estudiantes, docentes, programas y asignaturas  
✅ Gestión de períodos académicos  
✅ Asignación de docentes a asignaturas  
✅ Matrícula de estudiantes  
✅ Registro de calificaciones  
✅ Integración completa Frontend ↔ Backend  

---

## 🛠 Stack Tecnológico

| Capa            | Tecnología                          | Propósito |
|-----------------|-----------------------------------|----------|
| Backend         | NestJS (Node.js + TypeScript)     | API REST |
| Frontend        | Next.js (React + TypeScript)      | Interfaz de usuario |
| Base de Datos   | PostgreSQL                        | Persistencia de datos |
| ORM             | Prisma                            | Modelado y consultas |
| Contenedores    | Docker + Docker Compose           | Orquestación |
| Validación      | class-validator                   | Validación de datos |

---

## 🏗 Arquitectura
proyecto/
│
├── docker-compose.yml
├── .env.example
│
├── backend/ # API REST con NestJS
│ ├── Dockerfile
│ ├── src/
│ │ ├── common/ # Módulo compartido (cross-cutting)
│ │ │ ├── filters/ # Filtros de excepción globales
│ │ │ ├── interceptors/ # Interceptores de respuesta
│ │ │ ├── pipes/ # Pipes de validación
│ │ │ └── guards/ # Guards de autenticación
│ │ │
│ │ ├── prisma/ # Módulo Prisma (acceso a BD)
│ │ │
│ │ └── modules/ # Módulos de dominio
│ │ └── [entidad]/
│ │ ├── controller/ # Solo manejo HTTP
│ │ ├── service/ # Lógica de negocio
│ │ ├── repository/ # Acceso a datos (Prisma)
│ │ ├── dto/ # Validación de entrada
│ │ └── entities/ # Representación del dominio
│ │
│ └── prisma/
│ ├── schema.prisma
│ └── migrations/
│
├── frontend/ # Interfaz con Next.js
│ ├── Dockerfile
│ ├── src/
│ │ ├── app/ # App Router (páginas)
│ │ ├── components/ # Componentes reutilizables
│ │ ├── services/ # Capa de acceso a la API
│ │ ├── interfaces/ # Tipos e interfaces TypeScript
│ │ └── lib/ # Utilidades
│ └── package.json
│
└── README.md
## 📊 Modelo de Datos
Estudiante          1 ──── N  Matricula
Docente             1 ──── N  AsignacionDocente
ProgramaAcademico   1 ──── N  Estudiante
ProgramaAcademico   1 ──── N  Asignatura
Asignatura          1 ──── N  AsignacionDocente
PeriodoAcademico    1 ──── N  AsignacionDocente
AsignacionDocente   1 ──── N  Matricula
Matricula           1 ──── 1  Calificacion

