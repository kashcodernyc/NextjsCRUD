import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {store} from '../redux/store'
import {Provider} from 'react-redux'



function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
  <QueryClientProvider client={queryClient}>
    <Provider store = {store}>
      <Component {...pageProps}/>
    </Provider>
  </QueryClientProvider>
    )
}

export default MyApp
