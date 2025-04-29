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
    usage: `## 사용 방법
1. username: 본인의 WakaTime 사용자명
2. theme: 테마 선택 (radical, dark, light 등)
3. [더 많은 옵션](https://github.com/anuraghazra/github-readme-stats)

> ⚠️ 주의: WakaTime은 유료 서비스입니다. 무료 플랜은 위젯을 사용할 수 없습니다.`,
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
    usage: `## 사용 방법
1. Buy Me a Coffee:
   - buymeacoffee.com에서 계정 생성
   - 프로필 URL을 버튼 링크로 사용
   - 배지 색상과 스타일 커스터마이징

2. GitHub Sponsors:
   - GitHub Sponsors 프로그램 가입
   - 스폰서 페이지 URL을 버튼 링크로 사용
   - 배지 색상과 스타일 커스터마이징

3. [더 많은 옵션](https://shields.io)`,
  },
  {
    title: 'GitHub Profile Views Counter',
    description: 'Show how many times your profile has been viewed',
    code: `## 👀 GitHub Profile Views Counter

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=GideokKim&color=brightgreen" alt="Profile Views" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. color: 배지 색상 (brightgreen, blue, red 등)
3. style: 배지 스타일 (flat, plastic, flat-square 등)
4. [더 많은 옵션](https://github.com/antonkomarev/github-profile-views-counter)`,
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
    usage: `## 사용 방법
1. GitHub Actions 워크플로우 설정
2. 워크플로우 파일의 경로를 badge.svg URL에 사용
3. 워크플로우 상태가 자동으로 업데이트됨
4. [더 많은 옵션](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)`,
  },
  {
    title: 'Random Dev Quote',
    description: 'Display random developer quotes',
    code: `## 💬 Random Dev Quote

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote" />
</div>`,
    usage: `## 사용 방법
1. type: 표시 형식 (horizontal, vertical)
2. theme: 테마 선택 (radical, dark, light 등)
3. [더 많은 옵션](https://github.com/PiyushSuthar/github-readme-quotes)`,
  },
  {
    title: 'Profile Summary Cards',
    description: 'Create beautiful profile summary cards',
    code: `## 📊 Profile Summary Cards

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=GideokKim&theme=radical" alt="Profile Summary Cards" />
</div>`,
    usage: `## 사용 방법
1. username: 본인의 GitHub 사용자명
2. theme: 테마 선택 (radical, dark, light 등)
3. 카드 타입:
   - profile-details: 프로필 상세 정보
   - repos-per-language: 언어별 저장소 수
   - most-commit-language: 커밋이 많은 언어
   - stats: GitHub 통계
4. [더 많은 옵션](https://github.com/vn7n24fzkq/github-profile-summary-cards)`,
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