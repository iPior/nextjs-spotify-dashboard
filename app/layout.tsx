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
  title: "Spotify Dashboard",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} h-screen w-screen antialiased bg-background text-foreground relative`}
      >
          <div className="absolute z-[-10] bottom-0 left-0 right-0 top-0 
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#0E1321_1px,transparent_1px),linear-gradient(to_bottom,#0E1321_1px,transparent_1px)]
          bg-[size:14px_24px] 
          [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="h-full w-full lg:w-8/12 mx-auto flex flex-col justify-center"> 
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AuthProvider>
                <Header/>
                <div className="h-5/6">
                  {children}
                </div>
                <Footer />
              </AuthProvider>
            </ThemeProvider>
          </div>
      </body>
    </html>
  )
}