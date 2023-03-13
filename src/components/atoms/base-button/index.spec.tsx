import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import userEvent from "@testing-library/user-event";

import { BaseButton } from ".";

describe("BaseButton", () => {
  it("should render the button with the label", () => {
    render(<BaseButton label="Primary" variant="primary" />);
    expect(screen.getByText("Primary")).toBeVisible();
    expect(screen.getByText("Primary")).not.toBeDisabled();
  });

  it("should render the button with the label and disabled", () => {
    render(<BaseButton label="Primary" variant="primary" disabled />);
    expect(screen.getByText("Primary")).toBeVisible();
    expect(screen.getByText("Primary")).toBeDisabled();
  });

  it("should render the button with the label and loading", () => {
    render(
      <BaseButton
        testId="loading-test-id"
        label="Primary"
        variant="primary"
        loading
      />,
    );
    expect(screen.getByTestId("loading-test-id")).toBeVisible();
    expect(screen.getByTestId("loading-test-id")).toBeDisabled();
  });

  it("should render the button with the label and click", async () => {
    const onClick = jest.fn();
    render(<BaseButton label="Primary" variant="primary" onClick={onClick} />);
    await userEvent.click(screen.getByText("Primary"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("BaseButton Snapshots", () => {
  it("should render the button with the label and snapshot", () => {
    const { container } = render(
      <BaseButton label="Primary" variant="primary" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the button with the label and snapshot", () => {
    const { container } = render(
      <BaseButton label="Secondary" variant="secondary" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the button with the label and snapshot", () => {
    const { container } = render(
      <BaseButton label="Tertiary" variant="tertiary" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the button with the label and snapshot", () => {
    const { container } = render(<BaseButton label="Primary" />);
    expect(container).toMatchSnapshot();
  });
});
