import { isArray, isObject, snakeCase, transform } from "lodash-es";

export type MapToSnakeCaseInput = object;

export type MapToSnakeCaseOutput = object;

export const mapToSnakeCase = (
  input: MapToSnakeCaseInput,
): MapToSnakeCaseOutput =>
  transform(input, (acc: Record<string, object>, value, key, target) => {
    const snakeKey = isArray(target) ? key : snakeCase(key);

    acc[snakeKey] = isObject(value) ? mapToSnakeCase(value) : value;
  });
