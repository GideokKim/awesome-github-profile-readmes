import { Metadata } from 'next'
import StatisticsContent from './StatisticsContent'

export const metadata: Metadata = {
  title: 'Statistics - Awesome GitHub Profile READMEs',
  description: 'Learn how to showcase your GitHub statistics in your profile README',
}

export default function StatisticsPage() {
  return <StatisticsContent />
} 