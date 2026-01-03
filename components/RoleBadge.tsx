interface RoleBadgeProps {
  role: 'alumno' | 'institucion'
  size?: 'sm' | 'md'
}

export default function RoleBadge({ role, size = 'md' }: RoleBadgeProps) {
  const styles = {
    alumno: 'bg-blue-100 text-blue-800 border-blue-200',
    institucion: 'bg-purple-100 text-purple-800 border-purple-200',
  }

  const labels = {
    alumno: '👤 Alumno',
    institucion: '🏛️ Institución',
  }

  const icons = {
    alumno: '👤',
    institucion: '🏛️',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border ${styles[role]} ${sizeClasses[size]}`}
    >
      <span className="mr-1.5">{icons[role]}</span>
      {labels[role]}
    </span>
  )
}

