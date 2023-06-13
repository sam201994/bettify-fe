import { BaseProvider } from '@/src/context/BaseContext'
import '@/styles/globals.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from 'src/appLayout/Layout'

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <BaseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </QueryClientProvider>
  )
}
