import "reshaped/themes/reshaped/theme.css";
import { Reshaped } from 'reshaped';

function MyApp({ Component, pageProps }) {
  return (
    <Reshaped theme="reshaped">
      <Component {...pageProps} />
    </Reshaped>
  )
}

export default MyApp
