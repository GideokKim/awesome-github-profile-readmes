'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const examples = [
  {
    title: 'Simple Links',
    description: 'Basic social media links with icons',
    code: `## 🌐 Social Links

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GideokKim)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gideok-kim-113426253/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/gideokkim)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:noah.dev4127@gmail.com)`,
    usage: `## 사용 방법
1. style: for-the-badge (큰 배지 스타일)
2. logo: 각 소셜 미디어의 로고
3. logoColor: 로고 색상 (white)
4. 배지 색상: 각 소셜 미디어의 브랜드 색상
5. [더 많은 옵션](https://shields.io)`,
  },
  {
    title: 'Custom Badges',
    description: 'Customized badges with your own style',
    code: `## 🌐 Social Links

<div align="center">
  <a href="https://github.com/GideokKim">
    <img src="https://img.shields.io/badge/GitHub-Profile-blue?style=flat-square&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/gideok-kim-113426253/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/gideokkim">
    <img src="https://img.shields.io/badge/Twitter-Follow-blue?style=flat-square&logo=twitter" alt="Twitter" />
  </a>
</div>`,
    usage: `## 사용 방법
1. style: flat-square (작은 배지 스타일)
2. 배지 텍스트: 원하는 텍스트로 커스터마이징
3. 배지 색상: 원하는 색상으로 설정
4. alt: 접근성을 위한 대체 텍스트
5. [더 많은 옵션](https://shields.io)`,
  },
  {
    title: 'Icon Links',
    description: 'Clean icon-based social links',
    code: `## 🌐 Social Links

<div align="center">
  <a href="https://github.com/GideokKim" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" alt="GitHub" width="30" height="30" />
  </a>
  <a href="https://www.linkedin.com/in/gideok-kim-113426253/" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" alt="LinkedIn" width="30" height="30" />
  </a>
  <a href="https://twitter.com/gideokkim" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" alt="Twitter" width="30" height="30" />
  </a>
</div>`,
    usage: `## 사용 방법
1. simple-icons 라이브러리 사용
2. width, height: 아이콘 크기 설정
3. target="_blank": 새 탭에서 열기
4. alt: 접근성을 위한 대체 텍스트
5. [더 많은 아이콘](https://simpleicons.org)`,
  },
  {
    title: 'Animated Links',
    description: 'Social links with hover animations',
    code: `## 🌐 Social Links

<div align="center">
  <a href="https://github.com/GideokKim" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Profile-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/gideok-kim-113426253/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/gideokkim" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-Follow-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
</div>`,
    usage: `## 사용 방법
1. style: for-the-badge (큰 배지 스타일)
2. target="_blank": 새 탭에서 열기
3. 배지 텍스트: 원하는 텍스트로 커스터마이징
4. 배지 색상: 각 소셜 미디어의 브랜드 색상
5. [더 많은 옵션](https://shields.io)`,
  },
  {
    title: 'Profile Views',
    description: 'Show your profile views counter',
    code: `## 🌐 Social Links

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=GideokKim&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. label: 표시할 텍스트
3. color: 배지 색상
4. style: 배지 스타일 (flat, plastic, flat-square 등)
5. [더 많은 옵션](https://github.com/antonkomarev/github-profile-views-counter)`,
  }
]

export default function SocialContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Social Links</h1>
          <p className="text-xl text-gray-300 mt-2">
            Showcase your social media presence
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
                    key={`preview-${index}`}
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
                    key={`usage-${index}`}
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