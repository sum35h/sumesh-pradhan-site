import './globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

export const metadata = {
  title: 'Sumesh Pradhan',
  description: 'Sumesh Pradhan site (nextjs + tailwindcss)',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent theme flash by applying stored or preferred theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var stored = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var useDark = stored ? stored === 'dark' : prefersDark;
              var root = document.documentElement;
              if (useDark) root.classList.add('dark'); else root.classList.remove('dark');
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className="min-h-screen antialiased bg-black text-green-400">
        <MatrixRain />
        <div className="mx-auto max-w-5xl px-4">
          <Navbar />
          <main className="py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
