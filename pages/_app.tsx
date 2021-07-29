import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "./components/Layout/Layout"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Hydrate } from "react-query/hydration"
import { useState } from "react"
import { TokenContextProvider } from "../context/contextToken"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Hydrate state={pageProps.dehydratedState}>
        <TokenContextProvider>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </TokenContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
export default MyApp
