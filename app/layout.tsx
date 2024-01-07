import type { Metadata } from 'next'

import localFont from 'next/font/local'

import QueryProvider from 'app/QueryProvider'
import StyledComponentsRegistry from 'app/registry'

export const metadata: Metadata = {
  title: 'Hedvig application tool',
  description: 'Hedvig Full Stack case',
  icons: '/images/favicon.svg',
}

const myFont = localFont({
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
    <html lang="en" className={myFont.className}>
      <body>
        <QueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  )
}
