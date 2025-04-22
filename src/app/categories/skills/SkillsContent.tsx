'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'Simple Skills List',
    description: 'A clean and simple way to list your skills',
    code: `## 🛠️ Skills & Technologies

### Languages
- JavaScript/TypeScript
- Python
- Java
- Go

### Frontend
- React
- Next.js
- Vue.js
- Tailwind CSS

### Backend
- Node.js
- Express
- Django
- Spring Boot

### Databases
- MongoDB
- PostgreSQL
- MySQL
- Redis`,
  },
  {
    title: 'Skills with Icons',
    description: 'Show your skills with beautiful icons',
    code: `## 🛠️ Skills & Technologies

### Programming Languages
<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
</p>

### Frontend Development
<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>`,
  },
  {
    title: 'Skill Level Indicators',
    description: 'Show your proficiency level in each skill',
    code: `## 🛠️ Skills & Technologies

### Programming Languages
- JavaScript/TypeScript ⭐⭐⭐⭐⭐
- Python ⭐⭐⭐⭐
- Java ⭐⭐⭐
- Go ⭐⭐

### Frontend
- React ⭐⭐⭐⭐⭐
- Next.js ⭐⭐⭐⭐
- Vue.js ⭐⭐⭐
- Tailwind CSS ⭐⭐⭐⭐⭐

### Backend
- Node.js ⭐⭐⭐⭐
- Express ⭐⭐⭐
- Django ⭐⭐⭐
- Spring Boot ⭐⭐

### Databases
- MongoDB ⭐⭐⭐⭐
- PostgreSQL ⭐⭐⭐
- MySQL ⭐⭐⭐
- Redis ⭐⭐`,
  },
  {
    title: 'Interactive Skills Chart',
    description: 'A visual representation of your skills',
    code: `## 🛠️ Skills & Technologies

### Programming Languages
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GideokKim&layout=compact&theme=dark" alt="Top Languages" />
</div>

### Skill Distribution
<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,py,java,go,react,next,vue,tailwind,nodejs,express,django,spring,mongodb,postgres,mysql,redis" />
</div>`,
  }
]

export default function SkillsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Skills & Technologies</h1>
          <p className="text-xl text-gray-300 mt-2">
            Showcase your technical skills and expertise
          </p>
        </div>

        <div className="grid gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{example.title}</h2>
              <p className="text-gray-400 mb-4">{example.description}</p>
              
              {/* Preview Section */}
              <div className="mb-6 bg-white text-gray-900 p-6 rounded-lg">
                <div className="prose prose-sm prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:my-4 prose-li:my-0 max-w-none">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                      h2: ({...props}) => <h2 className="text-2xl font-bold mb-3" {...props} />,
                      h3: ({...props}) => <h3 className="text-xl font-bold mb-2" {...props} />,
                      p: ({...props}) => <p className="mb-4" {...props} />,
                      ul: ({...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      li: ({...props}) => <li className="mb-1" {...props} />,
                      table: ({...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                      tr: ({...props}) => <tr className="border-b border-gray-200" {...props} />,
                      td: ({...props}) => <td className="p-2" {...props} />,
                    }}
                  >
                    {example.code}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Code Section */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <pre className="text-gray-300 whitespace-pre-wrap">{example.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 