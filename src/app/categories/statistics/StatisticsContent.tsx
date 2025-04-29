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
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. show_icons: 아이콘 표시 여부 (true/false)
3. theme: 테마 선택 (dark, light, transparent 등)
4. [더 많은 옵션](https://github.com/anuraghazra/github-readme-stats)`,
  },
  {
    title: 'Streak Stats',
    description: 'Display your contribution streak',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=GideokKim&theme=dark" />
</div>`,
    usage: `## 사용 방법
1. user: 본인의 GitHub 사용자명
2. theme: 테마 선택 (dark, light 등)
3. [더 많은 옵션](https://github.com/DenverCoder1/github-readme-streak-stats)`,
  },
  {
    title: 'Top Languages',
    description: 'Show your most used languages',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GideokKim&layout=compact&theme=dark" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. layout: 레이아웃 선택 (compact, normal)
3. theme: 테마 선택 (dark, light 등)
4. [더 많은 옵션](https://github.com/anuraghazra/github-readme-stats)`,
  },
  {
    title: 'Activity Graph',
    description: 'Visualize your contribution activity',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=GideokKim&theme=github-dark" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. theme: 테마 선택 (github-dark, github-light 등)
3. [더 많은 옵션](https://github.com/Ashutosh00710/github-readme-activity-graph)`,
  },
  {
    title: 'Trophy Collection',
    description: 'Show your GitHub achievements',
    code: `## 📊 GitHub Stats

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=GideokKim&theme=onedark" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. theme: 테마 선택 (onedark, dark 등)
3. [더 많은 옵션](https://github.com/ryo-ma/github-profile-trophy)`,
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
    usage: `## 사용 방법
1. 각 통계 위젯의 옵션을 조합하여 사용
2. 테마를 통일하여 일관된 디자인 유지
3. 필요한 통계만 선택적으로 표시 가능`,
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

              {/* Usage Instructions */}
              <div className="mb-6 bg-gray-700 text-white p-6 rounded-lg">
                <div className="prose prose-sm prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-ul:my-4 prose-li:my-0 max-w-none">
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
                      tr: ({...props}) => <tr className="border-b border-gray-600" {...props} />,
                      td: ({...props}) => <td className="p-2" {...props} />,
                      a: ({...props}) => <a className="text-blue-400 hover:text-blue-300" {...props} />,
                    }}
                  >
                    {example.usage}
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