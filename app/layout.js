import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'AccuSentry | Vision Systems',
  description: 'Machine Vision Company',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
