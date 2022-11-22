import "reshaped/themes/reshaped/theme.css";
import { Reshaped } from 'reshaped';
import DarkMode from "src/components/darkMode";
function MyApp({ Component, pageProps }) {
  return (
    <Reshaped theme="reshaped">
      <Component {...pageProps} />
      <DarkMode />
    </Reshaped>
  )
}

export default MyApp
