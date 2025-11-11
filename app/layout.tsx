import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disha S — UI/UX & PM",
  description: "Portfolio of Disha S, UI/UX Designer and Project Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold tracking-tight">Disha S</a>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
              <a href="/contact" className="text-gray-900">Contact</a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>

        <footer className="text-center text-xs text-gray-400 py-8">
          © <span id="yr">{new Date().getFullYear()}</span> Disha S
        </footer>
      </body>
    </html>
  );
}
