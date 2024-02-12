import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "MPS Elevate Your Sound",
  description: "Music",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

