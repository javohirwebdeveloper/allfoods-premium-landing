import type { Metadata } from 'next';
import { LanguageProvider } from '../i18n/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'AllFoods',
  description: 'AllFoods',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
