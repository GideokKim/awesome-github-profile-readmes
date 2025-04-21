import { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects - Awesome GitHub Profile READMEs',
  description: 'Learn how to showcase your GitHub projects in your profile README',
}

export default function ProjectsPage() {
  return <ProjectsContent />
} 