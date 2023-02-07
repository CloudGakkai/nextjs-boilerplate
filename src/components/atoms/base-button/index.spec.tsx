import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BaseButton } from ".";

describe("BaseButton", () => {
  it("should render the button with the label", () => {
    render(<BaseButton label="Primary" variant="primary" />);
    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Primary")).not.toBeDisabled();
  });

  it("should render the button with the label and disabled", () => {
    render(<BaseButton label="Primary" variant="primary" disabled />);
    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Primary")).toBeDisabled();
  });

  it("should render the button with the label and loading", () => {
    render(<BaseButton label="Primary" variant="primary" loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeDisabled();
  });

  it("should render the button with the label and click", async () => {
    const onClick = jest.fn();
    render(<BaseButton label="Primary" variant="primary" onClick={onClick} />);
    await userEvent.click(screen.getByText("Primary"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Snapshot
  it("should render the button with the label and snapshot", () => {
    const { container } = render(
      <BaseButton label="Primary" variant="primary" />
    );
    expect(container).toMatchSnapshot();
  });
});
