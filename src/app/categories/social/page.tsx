import { Metadata } from 'next'
import SocialContent from './SocialContent'

export const metadata: Metadata = {
  title: 'Social Links - Awesome GitHub Profile READMEs',
  description: 'Learn how to showcase your social media links in your profile README',
}

export default function SocialPage() {
  return <SocialContent />
} 