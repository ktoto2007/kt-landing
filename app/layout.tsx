import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landing — статический лендинг',
  description: 'Мини-проект на Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}