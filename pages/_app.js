import MainContent from '../components/MainContent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainContent>
      <Component {...pageProps} />
    </MainContent>
  )
}

export default MyApp
