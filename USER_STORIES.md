# Historias de Usuario - MVP Credenciales Verificables

## Actor 1: Alumno (Titular de la credencial)

### HU-001: Acceso al sistema
**Como** alumno,  
**Quiero** acceder a la plataforma con email y RUT opcional,  
**Para** poder ver mis cursos y credenciales de forma simple y sin fricción.

**Criterios de Aceptación:**
- [x] Formulario de login con campo Email (requerido)
- [x] Campo RUT opcional
- [x] Botón "Ingresar" que redirige al dashboard
- [x] Login mock sin validación real
- [x] UI simple e institucional

**Prioridad:** Alta  
**Estado:** ✅ Completado

---

### HU-002: Visualizar mis cursos realizados
**Como** alumno,  
**Quiero** ver una lista de mis cursos con su estado y fecha,  
**Para** saber qué cursos he completado y puedo solicitar credenciales.

**Criterios de Aceptación:**
- [x] Vista "Mis Cursos Realizados"
- [x] Lista de cursos con:
  - [x] Nombre del programa
  - [x] Estado: Aprobado
  - [x] Horas del curso
  - [x] Botón "Obtener credencial" para cursos aprobados
- [x] Diseño claro y organizado

**Prioridad:** Alta  
**Estado:** ✅ Completado

---

### HU-003: Solicitar emisión de credencial
**Como** alumno,  
**Quiero** solicitar la emisión de una credencial verificable para un curso aprobado,  
**Para** obtener mi diploma digital verificable.

**Criterios de Aceptación:**
- [x] Botón "Obtener credencial" en cursos aprobados
- [ ] Modal/pantalla intermedia mostrando:
  - [ ] Mensaje: "La Escuela de Seguros emitirá una credencial verificable"
  - [ ] Animación de carga: "⏳ Emitiendo…"
  - [ ] Estado final: "✅ Credencial emitida con éxito"
- [ ] Redirección automática al wallet después de la emisión

**Prioridad:** Alta  
**Estado:** 🔄 En progreso

---

### HU-004: Gestionar mis credenciales en el wallet
**Como** alumno,  
**Quiero** ver todas mis credenciales emitidas en un wallet,  
**Para** gestionar y compartir mis diplomas verificables.

**Criterios de Aceptación:**
- [x] Vista "Mi Wallet de Credenciales"
- [x] Cada credencial muestra:
  - [x] Nombre del curso
  - [x] Emisor
  - [x] Fecha de emisión
  - [x] Estado: ✅ Válida
- [x] Acciones disponibles:
  - [x] 👁 Ver detalle
  - [ ] 📄 Descargar JSON
  - [ ] 🔳 Ver QR

**Prioridad:** Alta  
**Estado:** 🔄 En progreso

---

### HU-005: Ver detalle completo de credencial
**Como** alumno,  
**Quiero** ver el detalle completo de mi credencial en formato de diploma,  
**Para** verificar toda la información y compartirla.

**Criterios de Aceptación:**
- [x] Vista de diploma formal
- [x] Muestra:
  - [x] Nombre del curso
  - [x] Nombre del estudiante
  - [x] Emisor
  - [x] Fecha de emisión
  - [x] Ubicación de emisión
- [x] Badge "Credencial Verificada"
- [x] Sección colapsable con JSON técnico
- [x] Botón "Compartir credencial"

**Prioridad:** Alta  
**Estado:** ✅ Completado

---

### HU-006: Descargar credencial en formato JSON
**Como** alumno,  
**Quiero** descargar mi credencial en formato JSON,  
**Para** tener una copia técnica de mi credencial verificable.

**Criterios de Aceptación:**
- [ ] Botón "Descargar JSON" en el wallet
- [ ] Botón "Descargar JSON" en el detalle de credencial
- [ ] Descarga archivo JSON con el formato W3C Verifiable Credential
- [ ] Nombre de archivo descriptivo: `credencial-[curso]-[fecha].json`

**Prioridad:** Media  
**Estado:** ⏳ Pendiente

---

### HU-007: Generar y visualizar QR de credencial
**Como** alumno,  
**Quiero** generar un código QR de mi credencial,  
**Para** compartirla fácilmente con verificadores.

**Criterios de Aceptación:**
- [ ] Botón "Ver QR" en el wallet
- [ ] Modal o vista mostrando el código QR
- [ ] QR contiene link a la página de verificación pública
- [ ] Opción para descargar imagen del QR
- [ ] Instrucciones de uso del QR

**Prioridad:** Alta  
**Estado:** ⏳ Pendiente

---

## Actor 2: Institución (Issuer)

### HU-008: Proceso de emisión (Backend - Explicado en demo)
**Como** institución (Escuela de Seguros),  
**Quiero** validar, emitir y firmar credenciales,  
**Para** mantener control total sobre la emisión y garantizar autenticidad.

**Criterios de Aceptación:**
- [ ] Validación de que el alumno aprobó el curso
- [ ] Emisión de credencial con formato W3C
- [ ] Firma digital (mock en MVP)
- [ ] Control del emisor sobre todas las credenciales
- [ ] Registro de emisiones

**Prioridad:** Media (Backend - MVP mock)  
**Estado:** 📝 Documentado para demo

**Nota para el pitch:** "La institución conserva soberanía total sobre la emisión"

---

## Actor 3: Verificador (Empresa/Reclutador)

### HU-009: Verificar credencial mediante QR
**Como** verificador,  
**Quiero** escanear un código QR de una credencial,  
**Para** acceder rápidamente a la verificación pública.

**Criterios de Aceptación:**
- [ ] QR code escaneable que lleva a página de verificación
- [ ] Link directo a `/verify/[id]`
- [ ] Funciona desde cualquier escáner QR

**Prioridad:** Alta  
**Estado:** ⏳ Pendiente

---

### HU-010: Verificar credencial mediante link público
**Como** verificador,  
**Quiero** acceder a un link público de verificación,  
**Para** verificar la autenticidad de una credencial sin necesidad de login.

**Criterios de Aceptación:**
- [x] Página pública `/verify/[id]` accesible sin login
- [x] Muestra estado de verificación: ✅ Credencial Verificada
- [x] Información visible:
  - [x] Nombre del alumno
  - [x] Curso completado
  - [x] Emisor
  - [x] Fecha de emisión
  - [x] Estado: VÁLIDA
- [ ] QR code visible en la página de verificación
- [ ] Mensaje de confianza: "Esta credencial es verificable, no editable y emitida por la institución"

**Prioridad:** Alta  
**Estado:** 🔄 En progreso

---

### HU-011: Confirmar autenticidad de credencial
**Como** verificador,  
**Quiero** ver un mensaje claro de confianza,  
**Para** estar seguro de que la credencial es auténtica y no editable.

**Criterios de Aceptación:**
- [ ] Mensaje destacado: "Esta credencial es verificable, no editable y emitida por la institución"
- [ ] Indicadores visuales de seguridad
- [ ] Información clara sobre la verificación

**Prioridad:** Media  
**Estado:** ⏳ Pendiente

---

## Priorización

### Sprint 1 (Crítico - MVP Core)
1. HU-003: Modal de emisión con animación
2. HU-007: Generar y visualizar QR
3. HU-009: Verificar mediante QR
4. HU-010: Mejorar página de verificación con QR

### Sprint 2 (Importante - Mejoras)
5. HU-006: Descargar JSON
6. HU-011: Mensaje de confianza en verificación

### Sprint 3 (Backend - Futuro)
7. HU-008: Proceso de emisión real

---

## Notas de Implementación

- Mantener UI/UX institucional y simple
- Evitar jerga técnica/crypto
- Enfoque en confianza y profesionalismo
- Todas las funcionalidades son mock en este MVP
- QR debe generar link a `/verify/[id]` con ID codificado

