import { Metadata } from 'next'
import { NextTamaguiProvider } from '../components/TamaguiProvider'
import './globals.css'
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: 'Your page title',
  description: 'Your page description',
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <NextTamaguiProvider>{children}</NextTamaguiProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}