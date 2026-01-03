interface StatusBadgeProps {
  status: 'valid' | 'approved' | 'expired' | 'pending'
  size?: 'sm' | 'md'
}

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const styles = {
    valid: 'bg-green-100 text-green-800',
    approved: 'bg-blue-100 text-blue-800',
    expired: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800',
  }

  const labels = {
    valid: 'Válido',
    approved: 'Aprobado',
    expired: 'Expirado',
    pending: 'En Progreso',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${styles[status]} ${sizeClasses[size]}`}
    >
      {labels[status]}
    </span>
  )
}

