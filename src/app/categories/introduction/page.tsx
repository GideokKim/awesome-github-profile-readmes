import { Metadata } from 'next'
import IntroductionContent from './IntroductionContent'

export const metadata: Metadata = {
  title: 'Introduction - Awesome GitHub Profile READMEs',
  description: 'Learn how to create an engaging introduction section for your GitHub profile',
}

export default function IntroductionPage() {
  return <IntroductionContent />
} 