import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Auchan Admin UI',
  description: 'Auchan Admin UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
