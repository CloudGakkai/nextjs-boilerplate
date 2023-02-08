import { mapToSnakeCase } from ".";

describe("mapToSnakeCase", () => {
  it("should return an object", () => {
    expect(typeof mapToSnakeCase({})).toBe("object");
  });

  it("should return an empty object if no arguments are passed", () => {
    expect(mapToSnakeCase({})).toEqual({});
  });

  it("should return an object with all keys converted to snake case", () => {
    expect(mapToSnakeCase({ camelCase: "value" })).toEqual({
      camel_case: "value",
    });
  });

  it("should return an object with all keys converted to snake case and all values converted to snake case", () => {
    expect(
      mapToSnakeCase({
        camelCase: "value",
        anotherCamelCase: {
          anotherCamelCase: "value",
        },
      }),
    ).toEqual({
      camel_case: "value",
      another_camel_case: {
        another_camel_case: "value",
      },
    });
  });

  it("should return an array with all keys converted to snake case", () => {
    expect(mapToSnakeCase([{ camelCase: "value" }])).toEqual([
      {
        camel_case: "value",
      },
    ]);
  });

  it("should return an array with all keys converted to snake case and all values converted to snake case", () => {
    expect(
      mapToSnakeCase([
        {
          camelCase: "value",
          anotherCamelCase: {
            anotherCamelCase: "value",
          },
        },
      ]),
    ).toEqual([
      {
        camel_case: "value",
        another_camel_case: {
          another_camel_case: "value",
        },
      },
    ]);
  });
});
