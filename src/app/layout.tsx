import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome GitHub Profile READMEs",
  description: "Create an amazing GitHub profile README with the best tools and resources",
};

function BodyContent({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${inter.className} bg-gray-900 text-white`}>
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Awesome GitHub Profile READMEs
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </div>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>Made with ❤️ for GitHub users</p>
        </div>
      </footer>
    </body>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BodyContent>{children}</BodyContent>
    </html>
  );
}
