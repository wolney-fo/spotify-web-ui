import './globals.css'

export const metadata = {
  title: 'Spotify: Music for everyone',
  description: 'Music for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-800 text-zinc-50' >{children}</body>
    </html>
  )
}
