// Generate Test

import { QueryClient } from "@tanstack/react-query";

import { queryClient } from ".";

describe("queryClient", () => {
  it("should be defined", () => {
    expect(queryClient).toBeDefined();
  });

  it("should be an instance of QueryClient", () => {
    expect(queryClient).toBeInstanceOf(QueryClient);
  });
});
