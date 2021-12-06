import 'tailwindcss/tailwind.css'
import "../stylesheets/scrollbar.css";
import "../stylesheets/background.css";
import "../stylesheets/page.css"

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
