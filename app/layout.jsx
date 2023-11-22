import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Leo Multimedia',
  description: 'TV entertainment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
