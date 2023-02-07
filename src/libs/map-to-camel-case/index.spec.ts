import { mapToCamelCase } from "./index";

describe("mapToCamelCase", () => {
  it("should map to camel case", () => {
    const input = {
      foo_bar: "foo",
      bar_baz: "bar",
      baz_qux: "baz",
    };

    const expected = {
      fooBar: "foo",
      barBaz: "bar",
      bazQux: "baz",
    };

    expect(mapToCamelCase(input)).toEqual(expected);
  });
});
