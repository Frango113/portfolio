import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-indigo-950 text-indigo-50 relative`}>{children}
      <div className="bg-[#f2cd60] absolute top-[-6ream] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[25rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#0D0B08] absolute top-[-6ream] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[25rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] x1:left-[-15rem] 2x1:left-[-5rem]"></div>
      </body>
    </html>
  )
}
