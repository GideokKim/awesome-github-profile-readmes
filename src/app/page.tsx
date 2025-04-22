import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awesome GitHub Profile READMEs',
  description: 'Create an amazing GitHub profile README with the best tools and resources',
}

const categories = [
  {
    title: 'Introduction',
    description: 'Learn how to create an engaging introduction section for your GitHub profile',
    href: '/categories/introduction',
    icon: '👋',
  },
  {
    title: 'Skills & Technologies',
    description: 'Showcase your technical skills and expertise',
    href: '/categories/skills',
    icon: '💻',
  },
  {
    title: 'Projects',
    description: 'Highlight your best projects and contributions',
    href: '/categories/projects',
    icon: '🚀',
  },
  {
    title: 'Statistics',
    description: 'Display your GitHub activity and contributions',
    href: '/categories/statistics',
    icon: '📊',
  },
  {
    title: 'Social Links',
    description: 'Connect with your audience through social media',
    href: '/categories/social',
    icon: '🔗',
  },
  {
    title: 'Widgets',
    description: 'Add interactive and dynamic elements to your profile',
    href: '/categories/widgets',
    icon: '🎨',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Awesome GitHub Profile READMEs</h1>
        <p className="text-xl text-gray-300 mb-12">
          Discover and combine various elements to create your unique GitHub profile README
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-gray-400">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">🤔 왜 GitHub 프로필을 꾸며야 하나요?</h3>
              <p className="text-gray-300 mb-4">GitHub 프로필은 개발자의 온라인 명함과 같습니다. 채용 담당자나 다른 개발자들이 당신을 처음 만나는 곳이며, 전문성을 어필하고 네트워킹 기회를 늘릴 수 있습니다.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">⚡ 최소한의 꾸미기는 어떻게 하나요?</h3>
              <p className="text-gray-300 mb-4">간단한 자기소개, 주요 기술 스택, 대표 프로젝트 1-2개, 연락처 정보만 포함해도 충분합니다. 현재 사이트 `Introduction`에 있는 &quot;Basic Introduction&quot; 템플릿을 활용하면 쉽게 시작할 수 있습니다.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">🎯 포트폴리오로 활용하려면?</h3>
              <p className="text-gray-300 mb-4">기술 스택과 숙련도, 주요 프로젝트와 기여도, GitHub 활동 통계, 블로그나 기술 글 링크를 포함하면 좋습니다. &quot;Projects&quot;와 &quot;Statistics&quot; 섹션을 참고하세요.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">✨ 가시성 좋게 작성하는 방법</h3>
              <p className="text-gray-300 mb-4">이모지로 섹션을 구분하고, 배지로 기술 스택을 표시하며, 통계 카드로 활동을 보여주세요. &quot;Skills & Technologies&quot; 섹션에서 다양한 예시를 확인할 수 있습니다.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">📈 최신 트렌드는?</h3>
              <p className="text-gray-300 mb-4">깔끔하고 전문적인 디자인, 동적 위젯 활용, 개인화된 이모지와 배지, 프로젝트 하이라이트가 현재 트렌드입니다.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">📝 마크다운 문법이 어려워요</h3>
              <p className="text-gray-300 mb-4">기본적인 마크다운 문법만 알아도 충분합니다. 각 섹션에서 실제 사용 예시를 확인할 수 있으며, 점진적으로 배우면서 개선할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
