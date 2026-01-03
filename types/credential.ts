export interface CourseInfo {
  name: string
  type: string
  institution: string
}

export interface CredentialSubject {
  id: string
  name: string
  course: CourseInfo
}

export interface VerifiableCredential {
  '@context': string[]
  id: string
  type: string[]
  issuer: {
    id: string
    name: string
  }
  issuanceDate: string
  credentialSubject: CredentialSubject
  issuanceLocation?: string
  verificationStatus?: string
}

export interface Course {
  id: string
  nombre: string
  descripcion: string
  duracion: string
  horas: number
  nivel: string
  categoria: string
  completado: boolean
  fechaCompletacion?: string
  credencialId?: string
}

export interface Student {
  id: string
  nombre: string
  email: string
  rut: string
  cursos: Course[]
  credenciales: VerifiableCredential[]
}

