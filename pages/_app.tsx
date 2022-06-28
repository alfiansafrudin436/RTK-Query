import { Provider } from 'react-redux'

import '../styles/globals.css'
import { store } from '../src/store'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
