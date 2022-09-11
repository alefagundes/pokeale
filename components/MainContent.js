import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from './Footer'

const MainContent = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <title>PokeNext Ale</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}

export default MainContent
