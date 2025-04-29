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
    usage: `## 사용 방법
1. 프로젝트 제목을 링크로 연결
2. 프로젝트 설명을 간단히 추가
3. 카테고리별로 구분하여 정리`,
  },
  {
    title: 'Project Cards',
    description: 'Show your projects with beautiful cards',
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
      <td align="center">
        <a href="https://github.com/GideokKim/GideokKim.github.io">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=GideokKim.github.io&theme=dark" />
        </a>
      </td>
    </tr>
  </table>
</div>`,
    usage: `## 사용 방법
1. 테이블을 사용하여 프로젝트 카드를 정렬
2. 각 셀에 align="center" 적용하여 중앙 정렬
3. GitHub Readme Stats의 pin 위젯 사용
4. 옵션:
   - username: 본인의 GitHub 사용자명
   - repo: 저장소 이름
   - theme: dark (다크 테마)
5. [더 많은 옵션](https://github.com/anuraghazra/github-readme-stats)`,
  },
  {
    title: 'Project Gallery',
    description: 'A visual gallery of your projects',
    code: `## 🚀 Projects

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <a href="https://github.com/GideokKim/google-python-style-guide-kr">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-python-style-guide-kr&theme=dark" />
          <br />
          <b>Google Python Style Guide 한글 번역</b>
          <br />
          <sub>Google Python Style Guide의 한글 번역 프로젝트</sub>
        </a>
      </td>
      <td align="center" width="33%">
        <a href="https://github.com/GideokKim/google-cpp-style-guide-kr">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-cpp-style-guide-kr&theme=dark" />
          <br />
          <b>Google C++ Style Guide 한글 번역</b>
          <br />
          <sub>Google C++ Style Guide의 한글 번역 프로젝트</sub>
        </a>
      </td>
      <td align="center" width="33%">
        <a href="https://github.com/GideokKim/GideokKim.github.io">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=GideokKim.github.io&theme=dark" />
          <br />
          <b>Personal Website</b>
          <br />
          <sub>개인 웹사이트 프로젝트</sub>
        </a>
      </td>
    </tr>
  </table>
</div>`,
    usage: `## 사용 방법
1. 테이블을 사용하여 프로젝트를 그리드 형태로 배치
2. 각 셀 설정:
   - width="33%"로 균등한 너비 설정
   - align="center"로 중앙 정렬
3. 각 프로젝트 카드 구성:
   - GitHub Readme Stats pin 위젯
   - 프로젝트 제목 (굵은 글씨)
   - 프로젝트 설명 (작은 글씨)
4. 줄바꿈:
   - <br /> 태그로 적절한 간격 유지
   - <sub> 태그로 설명 텍스트 스타일링`,
  },
  {
    title: 'Project Showcase',
    description: 'Detailed showcase of your projects with descriptions and stats',
    code: `## 🚀 Projects

### [9git - 내 하루의 구깃](https://github.com/9git9git)
**팀 프로젝트** | **Backend Developer & DevOps Lead** (2025.03 - 2025.04)

- **GitHub Repository:** [9git-backend](https://github.com/9git9git/9git-backend), [9git-frontend](https://github.com/9git9git/9git-frontend), [9git-ai](https://github.com/9git9git/9git-ai), [9git-devops](https://github.com/9git9git/9git-devops)
- **목적:** 사용자의 하루를 더 효율적으로 관리할 수 있도록 도와주는 서비스입니다. 사용자의 일정과 메모를 관리하고, AI를 활용한 분석과 추천을 제공합니다.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/9git9git/9git-frontend">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=9git9git&repo=9git-frontend&theme=graywhite&show_owner=true" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/9git9git/9git-backend">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=9git9git&repo=9git-backend&theme=graywhite&show_owner=true" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/9git9git/9git-ai">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=9git9git&repo=9git-ai&theme=graywhite&show_owner=true" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/9git9git/9git-devops">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=9git9git&repo=9git-devops&theme=graywhite&show_owner=true" />
        </a>
      </td>
    </tr>
  </table>
</div>

[![Stars](https://img.shields.io/github/stars/9git9git/9git-backend?style=social)](https://github.com/9git9git/9git-backend/stargazers)
[![Forks](https://img.shields.io/github/forks/9git9git/9git-backend?style=social)](https://github.com/9git9git/9git-backend/network/members)
[![Issues](https://img.shields.io/github/issues/9git9git/9git-backend)](https://github.com/9git9git/9git-backend/issues)
[![License](https://img.shields.io/github/license/9git9git/9git-backend)](https://github.com/9git9git/9git-backend/blob/main/LICENSE)

#### 🚀 **Deployment Status**
[![Build, Push Frontend Image to ACR and Trigger Deployment](https://github.com/9git9git/9git-frontend/actions/workflows/upload_docker_image_to_acr.yml/badge.svg)](https://github.com/9git9git/9git-frontend/actions/workflows/upload_docker_image_to_acr.yml)
[![Build, Push Backend Image to ACR and Trigger Deployment](https://github.com/9git9git/9git-backend/actions/workflows/upload_docker_image_to_acr.yml/badge.svg)](https://github.com/9git9git/9git-backend/actions/workflows/upload_docker_image_to_acr.yml)

#### 🛠 **Tech Stack**

##### Version 1 (With Version Numbers)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.3-764ABC?style=flat-square&logo=redux&logoColor=white)
![shadcn-ui](https://img.shields.io/badge/shadcn--ui-0.0.0-000000?style=flat-square&logo=radix-ui&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115.12-009688?style=flat-square&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.12-blue?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0.40-000000?style=flat-square&logo=sqlalchemy&logoColor=white)
![Poetry](https://img.shields.io/badge/Poetry-1.7.1-60A5FA?style=flat-square&logo=poetry&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-0.34.0-000000?style=flat-square&logo=uvicorn&logoColor=white)
![Alembic](https://img.shields.io/badge/Alembic-1.15.1-000000?style=flat-square&logo=alembic&logoColor=white)
![Azure OpenAI](https://img.shields.io/badge/Azure_OpenAI-GPT4-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-0.3.21-red?style=flat-square&logo=langchain&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-24.0-2496ED?style=flat-square&logo=docker&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-Container_Apps-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-3.0-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Azure Database](https://img.shields.io/badge/Azure_Database-PostgreSQL-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)

##### Version 2 (Without Version Numbers)
![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-764ABC?style=flat-square&logo=redux&logoColor=white)
![shadcn-ui](https://img.shields.io/badge/shadcn--ui-000000?style=flat-square&logo=radix-ui&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-blue?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-000000?style=flat-square&logo=sqlalchemy&logoColor=white)
![Poetry](https://img.shields.io/badge/Poetry-60A5FA?style=flat-square&logo=poetry&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-000000?style=flat-square&logo=uvicorn&logoColor=white)
![Alembic](https://img.shields.io/badge/Alembic-000000?style=flat-square&logo=alembic&logoColor=white)
![Azure OpenAI](https://img.shields.io/badge/Azure_OpenAI-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-red?style=flat-square&logo=langchain&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Azure Database](https://img.shields.io/badge/Azure_Database-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)

---

### [Google Python Style Guide 한글 번역](https://github.com/GideokKim/google-python-style-guide-kr)
**번역 프로젝트** | **Maintainer** (2025.01 - 현재)

- **GitHub Repository:** [google-python-style-guide-kr](https://github.com/GideokKim/google-python-style-guide-kr)
- **목적:** Google Python Style Guide의 한글 번역 프로젝트입니다. 한국어 사용자들이 Google의 Python 스타일 가이드를 보다 쉽게 접근할 수 있도록 지원합니다.

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-python-style-guide-kr&theme=graywhite&show_owner=true)](https://github.com/GideokKim/google-python-style-guide-kr)

[![Stars](https://img.shields.io/github/stars/GideokKim/google-python-style-guide-kr?style=social)](https://github.com/GideokKim/google-python-style-guide-kr/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/google-python-style-guide-kr?style=social)](https://github.com/GideokKim/google-python-style-guide-kr/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/google-python-style-guide-kr)](https://github.com/GideokKim/google-python-style-guide-kr/issues)
[![License](https://img.shields.io/github/license/GideokKim/google-python-style-guide-kr)](https://github.com/GideokKim/google-python-style-guide-kr/blob/main/LICENSE)

#### 🛠 **Tech Stack**
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

---

### [Google C++ Style Guide 한글 번역](https://github.com/GideokKim/google-cpp-style-guide-kr)
**번역 프로젝트** | **Maintainer** (2025.01 - 현재)

- **GitHub Repository:** [google-cpp-style-guide-kr](https://github.com/GideokKim/google-cpp-style-guide-kr)
- **목적:** Google C++ Style Guide의 한글 번역 프로젝트입니다.

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=google-cpp-style-guide-kr&theme=graywhite&show_owner=true)](https://github.com/GideokKim/google-cpp-style-guide-kr)

[![Stars](https://img.shields.io/github/stars/GideokKim/google-cpp-style-guide-kr?style=social)](https://github.com/GideokKim/google-cpp-style-guide-kr/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/google-cpp-style-guide-kr?style=social)](https://github.com/GideokKim/google-cpp-style-guide-kr/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/google-cpp-style-guide-kr)](https://github.com/GideokKim/google-cpp-style-guide-kr/issues)
[![License](https://img.shields.io/github/license/GideokKim/google-cpp-style-guide-kr)](https://github.com/GideokKim/google-cpp-style-guide-kr/blob/main/LICENSE)

#### 🛠 **Tech Stack**
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

### [Personal Website](https://github.com/GideokKim/GideokKim.github.io)
**개인 프로젝트** | **Developer** (2025.01 - 현재)

- **GitHub Repository:** [GideokKim.github.io](https://github.com/GideokKim/GideokKim.github.io)
- **목적:** 개인 웹사이트 프로젝트입니다.

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=GideokKim&repo=GideokKim.github.io&theme=graywhite&show_owner=true)](https://github.com/GideokKim/GideokKim.github.io)

[![Stars](https://img.shields.io/github/stars/GideokKim/GideokKim.github.io?style=social)](https://github.com/GideokKim/GideokKim.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/GideokKim/GideokKim.github.io?style=social)](https://github.com/GideokKim/GideokKim.github.io/network/members)
[![Issues](https://img.shields.io/github/issues/GideokKim/GideokKim.github.io)](https://github.com/GideokKim/GideokKim.github.io/issues)
[![License](https://img.shields.io/github/license/GideokKim/GideokKim.github.io)](https://github.com/GideokKim/GideokKim.github.io/blob/main/LICENSE)

#### 🛠 **Tech Stack**
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)`,
    usage: `## 사용 방법
1. 프로젝트 섹션 구성:
   - 프로젝트 제목과 역할 정보 표시
   - GitHub Repository 링크와 목적 설명
   - Readme Card로 프로젝트 미리보기
   - GitHub 배지로 스타, 포크, 이슈, 라이선스 정보 표시
   - 기술 스택을 배지로 표시

2. 스타일링:
   - 이모지로 섹션 구분
   - flat-square 스타일로 깔끔한 배지 사용
   - 로고와 색상으로 시각적 구분
   - 구분선(---)으로 프로젝트 구분

3. [shields.io](https://shields.io)에서 배지 커스터마이징:
   - style: flat-square
   - logo: 기술 스택 로고
   - logoColor: 로고 색상
   - color: 배지 배경색`,
  }
]

export default function ProjectsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mt-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Showcase your GitHub projects in style with beautiful layouts and interactive elements
          </p>
        </div>

        <div className="grid gap-12">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <h2 className="text-3xl font-semibold mb-4 text-blue-400">{example.title}</h2>
              <p className="text-gray-400 mb-6 text-lg">{example.description}</p>
              
              {/* Preview Section */}
              <div className="mb-8 bg-white/10 backdrop-blur-sm text-gray-100 p-8 rounded-lg border border-gray-700/50">
                <div className="prose prose-invert prose-sm prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-300 prose-ul:my-4 prose-li:my-0 max-w-none [&_img]:inline-block [&_img]:mr-2">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({...props}) => <h1 className="text-3xl font-bold mb-4 text-blue-400" {...props} />,
                      h2: ({...props}) => <h2 className="text-2xl font-bold mb-3 text-blue-400" {...props} />,
                      h3: ({...props}) => <h3 className="text-xl font-bold mb-2 text-blue-400" {...props} />,
                      p: ({...props}) => <p className="mb-4" {...props} />,
                      ul: ({...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      li: ({...props}) => <li className="mb-1" {...props} />,
                      table: ({...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                      tr: ({...props}) => <tr className="border-b border-gray-700" {...props} />,
                      td: ({...props}) => <td className="p-2" {...props} />,
                      a: ({...props}) => <a className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200" {...props} />,
                    }}
                  >
                    {example.code}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mb-8 bg-gray-700/50 backdrop-blur-sm p-8 rounded-lg border border-gray-600/50">
                <div className="prose prose-invert prose-sm prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-300 prose-ul:my-4 prose-li:my-0 max-w-none [&_img]:inline-block [&_img]:mr-2">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({...props}) => <h1 className="text-3xl font-bold mb-4 text-blue-400" {...props} />,
                      h2: ({...props}) => <h2 className="text-2xl font-bold mb-3 text-blue-400" {...props} />,
                      h3: ({...props}) => <h3 className="text-xl font-bold mb-2 text-blue-400" {...props} />,
                      p: ({...props}) => <p className="mb-4" {...props} />,
                      ul: ({...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      li: ({...props}) => <li className="mb-1" {...props} />,
                      table: ({...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                      tr: ({...props}) => <tr className="border-b border-gray-600" {...props} />,
                      td: ({...props}) => <td className="p-2" {...props} />,
                      a: ({...props}) => <a className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200" {...props} />,
                    }}
                  >
                    {example.usage}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Code Section */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{example.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 