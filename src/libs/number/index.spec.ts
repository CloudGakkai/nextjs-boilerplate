import { formatNumber } from ".";

describe("formatNumber", () => {
  it("should return a string", () => {
    expect(typeof formatNumber(1)).toBe("string");
  });

  it("should return a string with a separator", () => {
    expect(formatNumber(1000)).toBe("1.000");
  });

  it("should return a string with a custom separator", () => {
    expect(formatNumber(1000, ",")).toBe("1,000");
  });
});
