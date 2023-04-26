import '../styles/globals.css'
import NavBar from './components/nav-bar'

// ルートレイアウトは必ずhtmlとbodyタグを含める必要がある
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
