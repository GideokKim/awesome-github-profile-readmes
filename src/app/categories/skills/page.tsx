import { Metadata } from 'next'
import SkillsContent from './SkillsContent'

export const metadata: Metadata = {
  title: 'Skills & Technologies - Awesome GitHub Profile READMEs',
  description: 'Learn how to showcase your technical skills and expertise in your GitHub profile',
}

export default function SkillsPage() {
  return <SkillsContent />
} 