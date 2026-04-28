# LaMadriguera

Repositorio principal del proyecto **Parquo**, una aplicación móvil para la gestión de parqueos.

Parquo tiene como objetivo permitir que los usuarios puedan buscar parqueos, consultar espacios disponibles, registrar vehículos, realizar reservas y visualizar comprobantes digitales desde una aplicación móvil.

---

## Objetivo del proyecto

Desarrollar una aplicación móvil usable para la gestión de parqueos, con backend real, base de datos, control de reservas, estructura modular, pruebas y preparación para despliegue futuro.

---

## Tecnologías principales

### Aplicación móvil

- Flutter
- Dart
- Consumo de API REST
- Arquitectura modular por funcionalidades

### Backend

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

### Base de datos

- PostgreSQL
- Prisma ORM
- Docker para entorno local

### Control de calidad

- Git
- GitHub
- Pull Requests
- GitHub Actions
- Tests
- CI/CD futuro

---

## Estructura del repositorio

```txt
LaMadriguera/
├── apps/
│   └── mobile/              # Aplicación móvil Flutter
│
├── backend/                 # API REST del sistema
│   ├── prisma/              # Esquema y migraciones de base de datos
│   ├── src/                 # Código fuente del backend
│   ├── tests/               # Pruebas del backend
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   ├── tsconfig.json
│   └── .env.example
│
├── database/                # Diagramas, scripts y respaldos controlados
│   ├── diagrams/
│   ├── scripts/
│   └── backups/
│
├── design/                  # Diseño visual del proyecto
│   ├── figma/
│   ├── logo/
│   ├── palette/
│   └── screenshots/
│
├── docs/                    # Documentación técnica y académica
│   ├── api/
│   ├── diagramas/
│   ├── informe-final/
│   ├── pruebas/
│   └── requisitos/
│
├── infra/                   # Infraestructura y despliegue futuro
│   ├── docker/
│   ├── deploy/
│   └── nginx/
│
├── .github/
│   └── workflows/           # Pipelines de CI/CD
│
├── docker-compose.yml       # Servicios locales como PostgreSQL
├── README.md
└── LICENSE
