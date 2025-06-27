// 'use client';
import Link from 'next/link';

export default function Home() {
  const links = [
    { href: '/csr', label: '⚡ CSR – Client‑Side Rendering' },
    { href: '/ssr', label: '🧠 SSR – Server‑Side Rendering' },
    { href: '/ssg', label: '📦 SSG – Static Site Generation' },
    { href: '/isr', label: '⏱️ ISR – Incremental Static Regeneration' },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 overflow-hidden">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:20px_20px]"></div>

      <div className="relative z-10 backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md text-center">
          Next.js Rendering Usullari
        </h1>
   

        <ul className="space-y-4 max-w-md mx-auto text-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 backdrop-blur-md"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
