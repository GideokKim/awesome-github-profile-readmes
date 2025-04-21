'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'Basic Stats',
    description: 'Show your basic GitHub statistics',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=GideokKim&show_icons=true&theme=dark" />
</div>`,
  },
  {
    title: 'Streak Stats',
    description: 'Display your contribution streak',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=GideokKim&theme=dark" />
</div>`,
  },
  {
    title: 'Top Languages',
    description: 'Show your most used languages',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GideokKim&layout=compact&theme=dark" />
</div>`,
  },
  {
    title: 'Activity Graph',
    description: 'Visualize your contribution activity',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=GideokKim&theme=github-dark" />
</div>`,
  },
  {
    title: 'Trophy Collection',
    description: 'Show your GitHub achievements',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=GideokKim&theme=onedark" />
</div>`,
  },
  {
    title: 'All-in-One Stats',
    description: 'Combine multiple statistics in one view',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=GideokKim&show_icons=true&theme=dark" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=GideokKim&theme=dark" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GideokKim&layout=compact&theme=dark" />
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=GideokKim&theme=github-dark" />
</div>`,
  }
]

export default function StatisticsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Statistics</h1>
          <p className="text-xl text-gray-300 mt-2">
            Showcase your GitHub statistics and achievements
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
                      h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-3" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-2" {...props} />,
                      p: ({node, ...props}) => <p className="mb-4" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      li: ({node, ...props}) => <li className="mb-1" {...props} />,
                      table: ({node, ...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                      tr: ({node, ...props}) => <tr className="border-b border-gray-200" {...props} />,
                      td: ({node, ...props}) => <td className="p-2" {...props} />,
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