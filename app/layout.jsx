import './globals.css'

export const metadata = {
  title: 'Shathursima Raveendran | Portfolio',
  description: 'Second year CE student at University of Peradeniya — building ML models, 3D engines, and everything in between.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}