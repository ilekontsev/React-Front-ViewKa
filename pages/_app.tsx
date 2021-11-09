import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "mobx-react";

import store from "../src/stories";

import { ReactQueryDevtools } from "react-query/devtools";

import Header from "../src/components/Header/Header";

import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>ViewKa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Component {...pageProps} />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
