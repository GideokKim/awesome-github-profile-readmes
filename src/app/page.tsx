import { Metadata } from 'next'
import CategoryCard from '@/components/CategoryCard'

export const metadata: Metadata = {
  title: 'Awesome GitHub Profile READMEs',
  description: 'Create an amazing GitHub profile README with the best tools and resources',
}

const categories = [
  {
    title: 'Introduction',
    description: 'Learn how to create an engaging introduction section for your GitHub profile',
    icon: '👋',
    href: '/categories/introduction'
  },
  {
    title: 'Skills & Technologies',
    description: 'Showcase your technical skills and expertise',
    icon: '💻',
    href: '/categories/skills'
  },
  {
    title: 'Projects',
    description: 'Highlight your best projects and contributions',
    icon: '🚀',
    href: '/categories/projects'
  },
  {
    title: 'Statistics',
    description: 'Display your GitHub activity and contributions',
    icon: '📊',
    href: '/categories/statistics'
  },
  {
    title: 'Social Links',
    description: 'Connect with your audience through social media',
    icon: '🔗',
    href: '/categories/social'
  },
  {
    title: 'Custom Widgets',
    description: 'Add interactive and dynamic elements to your profile',
    icon: '🎨',
    href: '/categories/widgets'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Awesome GitHub Profile READMEs
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Create an amazing GitHub profile README with the best tools and resources
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
