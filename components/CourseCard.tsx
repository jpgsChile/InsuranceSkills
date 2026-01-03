import StatusBadge from './StatusBadge'

interface CourseCardProps {
  id: string
  name: string
  hours: number
  status: 'approved' | 'pending'
  onIssueCredential: (courseId: string) => void
}

export default function CourseCard({
  id,
  name,
  hours,
  status,
  onIssueCredential,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {name}
          </h3>
          <p className="text-sm text-gray-600">
            {hours} horas
          </p>
        </div>
        <StatusBadge status={status} />
      </div>
      
      {status === 'approved' && (
        <button
          onClick={() => onIssueCredential(id)}
          className="w-full mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
        >
          Obtener credencial
        </button>
      )}
    </div>
  )
}

