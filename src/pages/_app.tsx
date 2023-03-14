import "~/styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/services";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}
