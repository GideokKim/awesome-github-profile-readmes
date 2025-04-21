'use client'

import { motion } from 'framer-motion'

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  href: string
}

const CategoryCard = ({ title, description, icon, href }: CategoryCardProps) => {
  return (
    <motion.a
      href={href}
      className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.a>
  )
}

export default CategoryCard 