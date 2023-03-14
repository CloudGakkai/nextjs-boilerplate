import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import type { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  logger: {
    error: /* istanbul ignore next */ () => null,
    log: /* istanbul ignore next */ () => null,
    warn: /* istanbul ignore next */ () => null,
  },
});

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
