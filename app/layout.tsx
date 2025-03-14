import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import AuthProvider from "@/context/AuthProvider"
import ThemeProvider from "@/context/ThemeProvider"

config.autoAddCss = false

const font = Figtree({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "SpotiDash",
  description: "Sign into Spotidash to view your dashboard with top tracks, artists, and new releases.",
  keywords: "dashboard, music, top tracks, top artists, new releases",
  authors: [{ name: "Piotr Szaran"}],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${font.className} h-screen w-screen antialiased bg-background text-foreground`}>
        <div className="fixed inset-0 z-[-10]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#0E1321_1px,transparent_1px),linear-gradient(to_bottom,#0E1321_1px,transparent_1px)]
          bg-[size:14px_24px]
          lg:[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]">
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="h-full w-[90%] lg:w-10/12 xl:w-8/11 mx-auto flex flex-col justify-between"> 
              <Header/>
              <main className="lg:min-h-[800px] lg:h-[5/6] w-full">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}