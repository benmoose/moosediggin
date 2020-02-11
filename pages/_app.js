import '../public/css/reboot.css'
import Layout from '../enhancers/layout'

export default Layout(({ Component, pageProps }) => {
  return <Component {...pageProps} />
})
