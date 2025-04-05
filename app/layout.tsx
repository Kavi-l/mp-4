'use client'

import Header from "./components/header";
import "./globals.css"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          <div className="flex flex-col items-center justify-center">
            <Header/>
            {children}
          </div>
      </body>
    </html>
  )
}