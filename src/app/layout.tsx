/*
 * @Date: 2025-07-07 10:29:58
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-28 17:01:33
 * @FilePath: \susie-cmy\src\app\layout.tsx
 * @Description: 强者都是孤独的
 */

import type { Metadata } from "next";
import Link from "next/link"
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import StructuredData from '@/components/StructuredData';
import TargetCursor from "@/components/TargetCursor";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: 'chenmuyu - iaxixi.com',
    template: '%s | chenmuyu - iaxixi.com'
  },
  description: 'chenmuyu的个人网站 iaxixi.com，分享技术、生活和个人见解',
  keywords: ['chenmuyu', 'iaxixi', '个人网站', '技术博客'],
  authors: [{ name: 'chenmuyu', url: 'https://www.iaxixi.com' }],
  creator: 'chenmuyu',
  publisher: 'chenmuyu',
  metadataBase: new URL('https://www.iaxixi.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.iaxixi.com',
    title: 'chenmuyu - iaxixi.com',
    description: 'chenmuyu的个人网站，分享技术与生活',
    siteName: 'iaxixi - chenmuyu',
    images: [
      {
        url: '/cmy.jpg',
        width: 1200,
        height: 630,
        alt: 'chenmuyu - iaxixi.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chenmuyu - iaxixi.com',
    description: 'chenmuyu的个人网站',
    images: ['/cmy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Ee4sy6Z50yHOab3ufIJOv0k64WujWKeRKyT6zBdFHj8',
    other: {
      'baidu-site-verification': 'codeva-LwfF9TmKJY',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <ThemeProvider>
          <header className="sticky top-2 z-50">
            <StructuredData />
            <Header />
          </header>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
          />
          <main className="max-w-screen-xl mx-auto">{children}</main>

          <footer className="cmy-footer cmy-footer-horizontal cmy-footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
              <Link href={"/blog"} className="cursor-target">日记</Link>
              <Link href={"/projects"} className="cursor-target">历程</Link>
              <Link href={"/about"} className="cursor-target">关于我</Link>
              <Link href={"/contact"} className="cursor-target">联系我</Link>
            </nav>
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
            <aside>
              <Link href={'https://beian.miit.gov.cn/'}>
                <p>Copyright © {new Date().getFullYear()} 湘ICP备2023003507号</p>
              </Link>
            </aside>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZWJQLWCFS1" />
    </html>
  );
}
