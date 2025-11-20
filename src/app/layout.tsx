import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CI/CD Practice',
  description: 'Next.js 프로젝트의 CI/CD 실습용 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-[#f7f7f7] text-[#111]">{children}</body>
    </html>
  );
}
