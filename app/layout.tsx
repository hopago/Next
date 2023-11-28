import Avatar from './components/Avatar'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: "Hopago's Blog",
  description: 'Created by hopago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <Avatar />
        {children}
      </body>
    </html>
  )
}
