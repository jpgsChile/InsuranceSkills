export type UserRole = 'alumno' | 'institucion'

export interface User {
  id: string
  name: string
  email: string
  rut: string
  role: UserRole
}

