import './globals.css';

export const metadata = {
  title: 'Next.js Rendering Usullari',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="bg-gray-50 text-gray-900 min-h-screen">{children}</body>
    </html>
  );
}
