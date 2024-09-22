//CSS
import localFont from "next/font/local"
import "../styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css' 
import styles from "./page.module.sass"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <main className={styles.page__main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
