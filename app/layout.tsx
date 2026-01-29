import './globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

export const metadata = {
  title: 'Sumesh Pradhan | DevOps Engineer & Cloud Architect',
  description: 'Sumesh Pradhan - Senior DevOps Engineer and Cloud Architect specializing in AWS, Kubernetes, Platform Engineering, CI/CD automation, and infrastructure as code. 6+ years building scalable, reliable cloud solutions.',
  keywords: 'Sumesh Pradhan, DevOps Engineer, Cloud Architect, AWS, Kubernetes, Platform Engineering, CI/CD, Terraform, Infrastructure as Code, Site Reliability Engineering, Cloud Infrastructure, DevOps Automation, Container Orchestration, Eventbrite, Appsmith',
  authors: [{ name: 'Sumesh Pradhan' }],
  creator: 'Sumesh Pradhan',
  publisher: 'Sumesh Pradhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sumeshpradhan.com',
    title: 'Sumesh Pradhan | DevOps Engineer & Cloud Architect',
    description: 'Senior DevOps Engineer specializing in AWS, Kubernetes, Platform Engineering, and cloud infrastructure automation.',
    siteName: 'Sumesh Pradhan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumesh Pradhan | DevOps Engineer & Cloud Architect',
    description: 'Senior DevOps Engineer specializing in AWS, Kubernetes, Platform Engineering, and cloud infrastructure automation.',
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
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sumeshpradhan.com" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sumesh Pradhan",
          "jobTitle": "Senior DevOps Engineer",
          "description": "DevOps Engineer and Cloud Architect specializing in AWS, Kubernetes, and Platform Engineering",
          "url": "https://sumeshpradhan.com",
          "sameAs": [
            "https://linkedin.com/in/sumeshpradhan",
            "https://github.com/sum35h"
          ],
          "knowsAbout": [
            "DevOps",
            "Cloud Architecture",
            "AWS",
            "Kubernetes",
            "Platform Engineering",
            "CI/CD",
            "Terraform",
            "Infrastructure as Code",
            "Site Reliability Engineering"
          ]
        }) }} />
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
