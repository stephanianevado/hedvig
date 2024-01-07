import type { Metadata } from 'next'

import localFont from 'next/font/local'

import QueryProvider from 'app/QueryProvider'
import StyledComponentsRegistry from 'app/registry'

export const metadata: Metadata = {
  title: 'Hedvig Admin Tool',
  description: 'My Hedvig Full Stack case',
  icons: '/images/favicon.svg',
}

const font = localFont({
  src: '/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <QueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  )
}
