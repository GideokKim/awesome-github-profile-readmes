'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'Simple Project List',
    description: 'A clean and simple way to list your projects',
    code: `## 🚀 Projects

### Featured Projects
- [Google Python Style Guide 한글 번역](https://github.com/GideokKim/google-python-style-guide-kr) - Google Python Style Guide의 한글 번역 프로젝트
- [Google C++ Style Guide 한글 번역](https://github.com/GideokKim/google-cpp-style-guide-kr) - Google C++ Style Guide의 한글 번역 프로젝트
- [Personal Website](https://github.com/GideokKim/GideokKim.github.io) - 개인 웹사이트 프로젝트`,
  },
  {
    title: 'Project Cards',
    description: 'Show your projects with beautiful cards',
    code: `## 🚀 Projects

<div align="center">
  <a href="https://github.com/GideokKim/google-python-style-guide-kr">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-python-style-guide-kr&theme=dark" />
  </a>
  <a href="https://github.com/GideokKim/google-cpp-style-guide-kr">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-cpp-style-guide-kr&theme=dark" />
  </a>
  <a href="https://github.com/GideokKim/GideokKim.github.io">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=GideokKim.github.io&theme=dark" />
  </a>
</div>`,
  },
  {
    title: 'Project Gallery',
    description: 'A visual gallery of your projects',
    code: `## 🚀 Projects

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/GideokKim/google-python-style-guide-kr">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-python-style-guide-kr&theme=dark" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/GideokKim/google-cpp-style-guide-kr">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-cpp-style-guide-kr&theme=dark" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/GideokKim/GideokKim.github.io">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=GideokKim.github.io&theme=dark" />
        </a>
      </td>
    </tr>
  </table>
</div>`,
  },
  {
    title: 'Project Showcase',
    description: 'Detailed showcase of your projects with descriptions and stats',
    code: `## 🚀 Projects

### Featured Projects

#### [Google Python Style Guide 한글 번역](https://github.com/GideokKim/google-python-style-guide-kr)
[![Stars](https://img.shields.io/github/stars/GideokKim/google-python-style-guide-kr?style=social)](https://github.com/GideokKim/google-python-style-guide-kr/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/google-python-style-guide-kr?style=social)](https://github.com/GideokKim/google-python-style-guide-kr/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/google-python-style-guide-kr)](https://github.com/GideokKim/google-python-style-guide-kr/issues)
[![License](https://img.shields.io/github/license/GideokKim/google-python-style-guide-kr)](https://github.com/GideokKim/google-python-style-guide-kr/blob/main/LICENSE)

Google Python Style Guide의 한글 번역 프로젝트입니다. 한국어 사용자들이 Google의 Python 스타일 가이드를 보다 쉽게 접근할 수 있도록 지원합니다.

**Tech Stack:** Markdown, Git, Python

#### [Google C++ Style Guide 한글 번역](https://github.com/GideokKim/google-cpp-style-guide-kr)
[![Stars](https://img.shields.io/github/stars/GideokKim/google-cpp-style-guide-kr?style=social)](https://github.com/GideokKim/google-cpp-style-guide-kr/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/google-cpp-style-guide-kr?style=social)](https://github.com/GideokKim/google-cpp-style-guide-kr/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/google-cpp-style-guide-kr)](https://github.com/GideokKim/google-cpp-style-guide-kr/issues)
[![License](https://img.shields.io/github/license/GideokKim/google-cpp-style-guide-kr)](https://github.com/GideokKim/google-cpp-style-guide-kr/blob/main/LICENSE)

Google C++ Style Guide의 한글 번역 프로젝트입니다.

**Tech Stack:** Markdown, Git

#### [Personal Website](https://github.com/GideokKim/GideokKim.github.io)
[![Stars](https://img.shields.io/github/stars/GideokKim/GideokKim.github.io?style=social)](https://github.com/GideokKim/GideokKim.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/GideokKim.github.io?style=social)](https://github.com/GideokKim/GideokKim.github.io/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/GideokKim.github.io)](https://github.com/GideokKim/GideokKim.github.io/issues)
[![License](https://img.shields.io/github/license/GideokKim/GideokKim.github.io)](https://github.com/GideokKim/GideokKim.github.io/blob/main/LICENSE)

개인 웹사이트 프로젝트입니다.

**Tech Stack:** SCSS, HTML`,
  }
]

export default function ProjectsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Projects</h1>
          <p className="text-xl text-gray-300 mt-2">
            Showcase your GitHub projects in style
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