import { render } from "@testing-library/react";

import Index from "..";

describe("Index", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Index />);
    }).not.toThrow();
  });
});

// Snapshot test
describe("Index", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Index />);

    expect(baseElement).toMatchSnapshot();
  });
});
