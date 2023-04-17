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
      <body className="bg-[#0E0E0E] text-white">{children}</body>
    </html>
  );
}
