import { VerifiableCredential } from '@/types/credential'
import credentialsData from '@/data/mockCredentials.json'
import coursesData from '@/data/mockCourses.json'
import usersData from '@/data/mockUsers.json'

export interface Course {
  id: string
  name: string
  hours: number
  status: 'approved' | 'pending'
  completed: boolean
  completedDate: string | null
}

export interface User {
  id: string
  name: string
  email: string
  rut: string
}

export function getMockUser(): User {
  return usersData[0] as User
}

export function getMockCourses(): Course[] {
  return coursesData as Course[]
}

export function getMockCredentials(): VerifiableCredential[] {
  return credentialsData as VerifiableCredential[]
}

export function getCredentialById(id: string): VerifiableCredential | undefined {
  // Buscar la credencial por ID exacto
  const credential = (credentialsData as VerifiableCredential[]).find(
    (cred) => cred.id === id
  )
  
  // Si no se encuentra, intentar buscar sin espacios o con diferentes formatos
  if (!credential) {
    // Intentar búsqueda más flexible (por si hay problemas de codificación)
    const normalizedId = id.trim()
    return (credentialsData as VerifiableCredential[]).find(
      (cred) => cred.id === normalizedId || cred.id.trim() === normalizedId
    )
  }
  
  return credential
}

export function getCourseById(id: string): Course | undefined {
  return (coursesData as Course[]).find((course) => course.id === id)
}
