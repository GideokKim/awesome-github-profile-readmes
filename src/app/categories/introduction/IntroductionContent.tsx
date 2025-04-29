'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'Basic Introduction',
    description: 'A simple and professional introduction',
    code: `# Hi there 👋

I'm [Your Name], a passionate developer who loves to build things.

## About Me
- 🔭 I'm currently working on [project]
- 🌱 I'm currently learning [technology]
- 👯 I'm looking to collaborate on [project]
- 💬 Ask me about [topic]
- 📫 How to reach me: [contact info]`,
    usage: `## 사용 방법
1. [Your Name]을 본인의 이름으로 변경
2. [project], [technology], [topic] 등을 본인의 정보로 수정
3. [contact info]에 이메일이나 소셜 미디어 링크 추가
4. 이모지는 상황에 맞게 변경 가능`,
  },
  {
    title: 'Creative Introduction',
    description: 'A more creative and eye-catching introduction',
    code: `# Hello World! 🌎

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F75C7E&center=true&vCenter=true&width=435&lines=Welcome+to+my+profile!;I'm+a+passionate+developer;Let's+build+something+awesome+together" alt="Typing SVG" />
</div>

## 🚀 About Me
I'm a developer who loves to create and innovate. When I'm not coding, you can find me [hobby].`,
    usage: `## 사용 방법
1. [readme-typing-svg.herokuapp.com](https://readme-typing-svg.herokuapp.com)에서 원하는 텍스트로 수정
2. font, color, pause 등의 파라미터 조정 가능
3. [hobby]를 본인의 취미나 관심사로 변경
4. 이모지와 섹션 제목은 자유롭게 수정 가능`,
  },
  {
    title: 'Professional Introduction',
    description: 'A professional introduction with badges',
    code: `# [Your Name]

<div align="center">
  <img src="https://img.shields.io/badge/Developer-Expert-blue" alt="Developer Badge" />
  <img src="https://img.shields.io/badge/Open%20Source-Contributor-green" alt="Open Source Badge" />
</div>

## Professional Summary
Experienced developer with expertise in [technologies]. Passionate about creating efficient and scalable solutions.`,
    usage: `## 사용 방법
1. [Your Name]을 본인의 이름으로 변경
2. [shields.io](https://shields.io)에서 원하는 배지 생성 및 추가
3. [technologies]를 본인의 전문 기술로 변경
4. Professional Summary 섹션을 본인의 경력과 목표에 맞게 수정`,
  }
]

export default function IntroductionContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Introduction</h1>
          <p className="text-xl text-gray-300 mt-2">
            Create an engaging introduction section for your GitHub profile
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
                      a: ({...props}) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
                    }}
                  >
                    {example.code}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mb-6 bg-gray-700 p-6 rounded-lg">
                <div className="prose prose-sm prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-300 prose-ul:my-4 prose-li:my-0 max-w-none">
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
                      a: ({...props}) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
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