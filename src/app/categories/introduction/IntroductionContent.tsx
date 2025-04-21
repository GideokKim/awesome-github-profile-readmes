'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

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
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{example.code}</ReactMarkdown>
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