'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'WakaTime Stats',
    description: 'Show your coding activity and time spent on different languages',
    code: `## ⏱️ WakaTime Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=GideokKim&theme=radical" alt="WakaTime Stats" />
</div>`,
  },
  {
    title: 'Buy Me a Coffee/Sponsor Button',
    description: 'Add a button for supporters to buy you a coffee or sponsor your work',
    code: `## ☕ Buy Me a Coffee/Sponsor Button

<div align="center">
  <a href="https://www.buymeacoffee.com/gideokkim">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />
  </a>
  <a href="https://github.com/sponsors/GideokKim">
    <img src="https://img.shields.io/badge/Sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white" alt="Sponsor" />
  </a>
</div>`,
  },
  {
    title: 'GitHub Profile Views Counter',
    description: 'Show how many times your profile has been viewed',
    code: `## 👀 GitHub Profile Views Counter

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=GideokKim&color=brightgreen" alt="Profile Views" />
</div>`,
  },
  {
    title: 'GitHub Action Status',
    description: 'Show your GitHub Action workflow status',
    code: `## ⚡ GitHub Action Status

<div align="center">
  <a href="https://github.com/ms-five-guys/LinQu/actions/workflows/deploy-to-vm.yml">
    <img src="https://github.com/ms-five-guys/LinQu/actions/workflows/deploy-to-vm.yml/badge.svg" alt="Deploy to Azure VM" />
  </a>
  <a href="https://github.com/GideokKim/awesome-github-profile-readmes/actions/workflows/pages/pages-build-deployment">
    <img src="https://github.com/GideokKim/awesome-github-profile-readmes/actions/workflows/pages/pages-build-deployment/badge.svg" alt="pages-build-deployment" />
  </a>
</div>`,
  },
  {
    title: 'Random Dev Quote',
    description: 'Display random developer quotes',
    code: `## 💬 Random Dev Quote

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote" />
</div>`,
  },
  {
    title: 'Profile Summary Cards',
    description: 'Create beautiful profile summary cards',
    code: `## 📊 Profile Summary Cards

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=GideokKim&theme=radical" alt="Profile Summary Cards" />
</div>`,
  }
]

export default function WidgetsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Widgets</h1>
          <p className="text-xl text-gray-300 mt-2">
            Enhance your GitHub profile with custom widgets
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