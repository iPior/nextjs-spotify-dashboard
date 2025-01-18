import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
        className={`${font.className} antialiased h-screen w-full flex flex-col justify-between bg-slate-950 text-white relative`}
      >

          {/* <div className="absolute bottom-0 left-[-10%] top-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] "></div> */}

          <Header/>
          <div className="h-full">
            {children}
          </div>
          <Footer />

      </body>
    </html>
  )
}

