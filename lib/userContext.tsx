'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { UserRole } from '@/types/user'

interface UserContextType {
  role: UserRole | null
  setRole: (role: UserRole) => void
  clearRole: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Cargar rol desde localStorage al iniciar
    const savedRole = localStorage.getItem('userRole') as UserRole | null
    if (savedRole && (savedRole === 'alumno' || savedRole === 'institucion')) {
      setRoleState(savedRole)
    }
  }, [])

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole)
    localStorage.setItem('userRole', newRole)
    // Redirigir según el rol
    if (newRole === 'alumno') {
      router.push('/dashboard')
    } else if (newRole === 'institucion') {
      router.push('/institucion/dashboard')
    }
  }

  const clearRole = () => {
    setRoleState(null)
    localStorage.removeItem('userRole')
    router.push('/')
  }

  return (
    <UserContext.Provider value={{ role, setRole, clearRole }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

