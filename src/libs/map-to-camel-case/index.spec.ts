import { mapToCamelCase } from "./index";

describe("mapToCamelCase", () => {
  it("should return an object", () => {
    expect(typeof mapToCamelCase({})).toBe("object");
  });

  it("should return an empty object if no arguments are passed", () => {
    expect(mapToCamelCase({})).toEqual({});
  });

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

  it("should map to camel case with nested object", () => {
    const input = {
      foo_bar: "foo",
      bar_baz: "bar",
      baz_qux: "baz",
      nested: {
        foo_bar: "foo",
        bar_baz: "bar",
        baz_qux: "baz",
      },
    };

    const expected = {
      fooBar: "foo",
      barBaz: "bar",
      bazQux: "baz",
      nested: {
        fooBar: "foo",
        barBaz: "bar",
        bazQux: "baz",
      },
    };

    expect(mapToCamelCase(input)).toEqual(expected);
  });

  it("should map to camel case with nested array", () => {
    const input = {
      foo_bar: "foo",
      bar_baz: "bar",
      baz_qux: "baz",
      nested: [
        {
          foo_bar: "foo",
          bar_baz: "bar",
          baz_qux: "baz",
        },
      ],
    };

    const expected = {
      fooBar: "foo",
      barBaz: "bar",
      bazQux: "baz",
      nested: [
        {
          fooBar: "foo",
          barBaz: "bar",
          bazQux: "baz",
        },
      ],
    };

    expect(mapToCamelCase(input)).toEqual(expected);
  });
});
