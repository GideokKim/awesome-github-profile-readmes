import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awesome GitHub Profile READMEs',
  description: 'Create an amazing GitHub profile README with the best tools and resources',
}

const categories = [
  {
    title: 'Introduction',
    description: 'Learn how to create an engaging introduction section for your GitHub profile',
    href: '/categories/introduction',
    icon: '👋',
  },
  {
    title: 'Skills & Technologies',
    description: 'Showcase your technical skills and expertise',
    href: '/categories/skills',
    icon: '💻',
  },
  {
    title: 'Projects',
    description: 'Highlight your best projects and contributions',
    href: '/categories/projects',
    icon: '🚀',
  },
  {
    title: 'Statistics',
    description: 'Display your GitHub activity and contributions',
    href: '/categories/statistics',
    icon: '📊',
  },
  {
    title: 'Social Links',
    description: 'Connect with your audience through social media',
    href: '/categories/social',
    icon: '🔗',
  },
  {
    title: 'Widgets',
    description: 'Add interactive and dynamic elements to your profile',
    href: '/categories/widgets',
    icon: '🎨',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Awesome GitHub Profile READMEs</h1>
        <p className="text-xl text-gray-300 mb-12">
          Create a beautiful and professional GitHub profile README with our templates and examples
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-gray-400">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
