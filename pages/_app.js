import '../styles/global.css' // <= Could be called anything
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp