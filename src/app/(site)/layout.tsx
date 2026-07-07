import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Acuv Strategy — The destination for confident growth',
  description:
    'From Beirut to New York to the MENA region, acuv guides privately owned businesses to confident growth through bespoke strategy programs backed by finance with integrity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
