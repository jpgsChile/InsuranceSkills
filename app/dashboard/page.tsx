'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CourseCard from '@/components/CourseCard'
import { getMockUser, getMockCourses } from '@/lib/mockData'

export default function DashboardPage() {
  const router = useRouter()
  const user = getMockUser()
  const courses = getMockCourses()

  // Mock function to simulate issuing a credential
  // In a real implementation, this would call a backend API
  const handleIssueCredential = (courseId: string) => {
    // For demo purposes, we redirect to wallet
    // In a real system, this would create the credential first
    router.push('/wallet')
  }

  const completedCourses = courses.filter(c => c.completed)
  const pendingCourses = courses.filter(c => !c.completed)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ES</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Escuela de Seguros de Chile
                </h1>
              </div>
            </div>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </header>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Mis Cursos Realizados
          </h1>
          <p className="text-gray-600">
            Bienvenido, {user.name}
          </p>
        </div>

        {completedCourses.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cursos Completados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  hours={course.hours}
                  status="approved"
                  onIssueCredential={handleIssueCredential}
                />
              ))}
            </div>
          </div>
        )}

        {pendingCourses.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cursos en Progreso
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  hours={course.hours}
                  status="pending"
                  onIssueCredential={handleIssueCredential}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
