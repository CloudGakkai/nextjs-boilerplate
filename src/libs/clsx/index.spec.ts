import { clsx } from ".";

describe("clsx", () => {
  it("should return a string", () => {
    expect(typeof clsx()).toBe("string");
  });

  it("should return an empty string if no arguments are passed", () => {
    expect(clsx()).toBe("");
  });

  it("should return an empty string if all arguments are falsy", () => {
    expect(clsx(null, undefined, false, 0, "")).toBe("");
  });

  it("should return a string with all arguments joined by a space", () => {
    expect(clsx("a", "b", "c")).toBe("a b c");
  });

  it("should return a string with all arguments joined by a space and ignore falsy arguments", () => {
    expect(clsx("a", null, undefined, false, 0, "b", "c")).toBe("a b c");
  });
});
