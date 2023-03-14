import type { NextApiResponse } from "next";
import type { ProductType } from "~/types";

interface ProductsResponse {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}

export default function handler(res: NextApiResponse<ProductsResponse>) {
  res.status(200).json({
    products: [
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
    ],
    total: 1,
    skip: 0,
    limit: 10,
  });
}
