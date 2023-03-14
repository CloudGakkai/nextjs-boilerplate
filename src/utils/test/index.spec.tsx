// Generate Unit Test from ./index.tsx

import React from "react";

import { render } from "@testing-library/react";
import { Wrapper } from "~/utils";

describe("Index", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<div></div>, { wrapper: Wrapper });

    expect(baseElement).toBeTruthy();
  });
});
