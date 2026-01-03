# Instrucciones de Despliegue

## 1. Push a GitHub

El repositorio ya está configurado con el remote. Para hacer push necesitarás autenticarte:

```bash
# Opción 1: Usar token de acceso personal
git push -u origin main

# Si te pide credenciales, puedes usar:
# Username: tu-usuario-github
# Password: tu-personal-access-token (no tu contraseña)
```

O si prefieres usar SSH (recomendado):
```bash
git remote set-url origin git@github.com:jpgsChile/InsuranceSkills.git
git push -u origin main
```

## 2. Desplegar en Vercel

### Opción A: Desde la interfaz web de Vercel (Recomendado)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Conecta tu repositorio de GitHub: `jpgsChile/InsuranceSkills`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"
6. ¡Listo! Tu aplicación estará disponible en una URL de Vercel

### Opción B: Desde la línea de comandos

```bash
# Instalar Vercel CLI (si no está instalado globalmente)
npx vercel

# O si lo instalaste localmente:
npm run vercel

# Seguir las instrucciones:
# - Login con tu cuenta de Vercel
# - Seleccionar el proyecto
# - Confirmar configuración
```

### Opción C: Usar npx directamente

```bash
npx vercel --prod
```

## Configuración Automática

Vercel detectará automáticamente:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Variables de Entorno

Si necesitas agregar variables de entorno en el futuro:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

## Dominio Personalizado

Para agregar un dominio personalizado:
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio

