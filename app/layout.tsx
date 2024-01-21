import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "Music Production",
  description: "Music",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

