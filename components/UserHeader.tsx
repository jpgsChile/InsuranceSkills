'use client'

import Link from 'next/link'
import { useUser } from '@/lib/userContext'
import RoleBadge from './RoleBadge'
import { getMockUser } from '@/lib/mockData'

export default function UserHeader() {
  const { role, clearRole } = useUser()
  const user = getMockUser()

  if (!role) return null

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RoleBadge role={role} size="sm" />
          <span className="text-sm text-gray-600">
            {role === 'alumno' ? user.name : 'Escuela de Seguros de Chile'}
          </span>
        </div>
        <button
          onClick={clearRole}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cambiar de rol
        </button>
      </div>
    </div>
  )
}

