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
    usage: `## 사용 방법
1. 각 카테고리별로 본인의 기술 스택을 나열
2. 카테고리는 자유롭게 추가/수정 가능
3. 기술 스택은 숙련도 순으로 정렬하는 것을 추천`,
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
    usage: `## 사용 방법
1. [shields.io](https://shields.io)에서 원하는 기술 스택의 배지 생성
2. 배지 스타일 옵션:
   - style: for-the-badge (큰 배지)
   - logo: 기술 스택의 로고
   - logoColor: 로고 색상
   - color: 배지 배경색
3. 배지 URL을 복사하여 HTML img 태그로 추가
4. align="left"로 배치하여 왼쪽 정렬
5. 로고는 [simpleicons.org/](https://simpleicons.org/)에서 찾을 수 있음`,
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
    usage: `## 사용 방법
1. 각 기술 스택 옆에 별(⭐) 개수로 숙련도 표시
2. 숙련도 기준:
   - ⭐⭐: 기초 수준
   - ⭐⭐⭐: 중급 수준
   - ⭐⭐⭐⭐: 고급 수준
   - ⭐⭐⭐⭐⭐: 전문가 수준
3. 기술 스택은 숙련도 순으로 정렬`,
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
    usage: `## 사용 방법
1. GitHub Readme Stats 위젯:
   - username: 본인의 GitHub 사용자명
   - layout: compact (간단한 레이아웃)
   - theme: dark (다크 테마)
   - [더 많은 옵션](https://github.com/anuraghazra/github-readme-stats)

2. Skill Icons 위젯:
   - i= 뒤에 쉼표로 구분된 기술 스택 아이콘 코드
   - [사용 가능한 아이콘 목록](https://skillicons.dev)
   - 아이콘 코드는 소문자로 작성`,
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