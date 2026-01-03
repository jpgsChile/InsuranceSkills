# Escuela de Seguros de Chile - MVP Credenciales Verificables

MVP frontend para una plataforma de credenciales verificables (Verifiable Credentials) para la Escuela de Seguros de Chile.

## Características

Este es un **MVP de demostración** que incluye:

- **Landing Page**: Página de inicio informativa
- **Login Mock**: Autenticación simulada (cualquier credencial funciona)
- **Dashboard de Estudiante**: Vista de cursos completados y en progreso
- **Wallet de Credenciales**: Gestión de credenciales verificables del estudiante
- **Detalle de Credencial**: Vista completa de una credencial individual
- **Página de Verificación Pública**: Permite verificar credenciales públicamente

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Sin librerías UI externas**

## Prerequisitos

- Node.js 18+ 
- npm o yarn

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Estructura del Proyecto

```
├── app/                    # Páginas Next.js (App Router)
│   ├── dashboard/          # Dashboard del estudiante
│   ├── wallet/             # Wallet de credenciales
│   ├── credential/[id]/    # Detalle de credencial (diploma)
│   ├── verify/[id]/        # Verificación pública
│   ├── login/              # Login mock
│   └── page.tsx            # Landing page
├── components/             # Componentes reutilizables
│   ├── Navbar.tsx          # Barra de navegación
│   ├── CourseCard.tsx      # Tarjeta de curso
│   ├── CredentialCard.tsx  # Tarjeta de credencial
│   └── StatusBadge.tsx     # Badge de estado
├── data/                   # Datos mock (JSON)
│   ├── mockCourses.json    # Cursos
│   ├── mockCredentials.json # Credenciales
│   ├── mockUsers.json      # Usuarios
│   └── mockStudent.json    # Datos de estudiante (legacy)
├── lib/                    # Utilidades
│   └── mockData.ts         # Funciones para obtener datos mock
├── types/                  # Tipos TypeScript
│   └── credential.ts       # Tipos de credenciales
└── public/                 # Assets estáticos
```

## Notas Importantes

- **Este es un MVP de demostración**: No hay backend real, blockchain, o wallets reales
- **Autenticación mock**: Cualquier correo/contraseña permite acceder
- **Datos mock**: Los datos vienen de archivos JSON locales
- **Estándares W3C**: Usa conceptos de Verifiable Credentials, pero todo es simulado

## Diseño

El diseño sigue principios de:
- Simplicidad e institucionalidad
- Confianza y profesionalismo
- Sin jerga técnica/crypto
- Enfoque en educación y verificación

## Licencia

Este es un proyecto MVP de demostración.

