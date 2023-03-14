import { renderHook, waitFor } from "@testing-library/react";
import { api } from "~/services";
import { Wrapper } from "~/utils";

import { getProducts, useProducts } from "./products.query";

jest.mock("~/services");

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://picsum.photos/200/300",
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
];

const response = {
  data: {
    products,
    total: 1,
    skip: 0,
    limit: 10,
  },
};

describe("Product Query", () => {
  beforeAll(() => {
    (api.get as jest.Mock).mockResolvedValue(response);
  });

  describe("getProducts", () => {
    it("should return products", async () => {
      const result = await getProducts();

      expect(result).toEqual(response.data);
    });

    it("should return products with pagination", async () => {
      const result = await getProducts({ skip: 0, limit: 10 });

      expect(result).toEqual(response.data);
    });
  });

  describe("useProducts", () => {
    it("should return products", async () => {
      const { result } = renderHook(() => useProducts(), {
        wrapper: Wrapper,
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(response.data);
    });

    it("should return products with pagination", async () => {
      const { result } = renderHook(() => useProducts({ skip: 0, limit: 10 }), {
        wrapper: Wrapper,
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(response.data);
    });
  });
});
