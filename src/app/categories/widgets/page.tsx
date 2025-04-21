import { Metadata } from 'next'
import WidgetsContent from './WidgetsContent'

export const metadata: Metadata = {
  title: 'Widgets - Awesome GitHub Profile READMEs',
  description: 'Learn how to add custom widgets to your GitHub profile',
}

export default function WidgetsPage() {
  return <WidgetsContent />
} 