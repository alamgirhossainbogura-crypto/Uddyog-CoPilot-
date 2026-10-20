import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uddyog-CoPilot',
  description: 'বাংলাভাষী উদ্যোক্তাদের জন্য এআই বিজনেস সহকারী',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
