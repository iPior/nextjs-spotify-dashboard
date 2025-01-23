import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

import AuthProvider from "../context/AuthProvider"

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
    <html lang="en">
      <body
        className={`${font.className} h-screen antialiased bg-slate-950 text-white relative`}
      >
          <div className="absolute z-[-10] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          <div className="h-full w-2/3 mx-auto flex flex-col justify-between"> 
            <AuthProvider>
              <Header/>
              {children}
              <Footer />
            </AuthProvider>
          </div>
      </body>
    </html>
  )
}