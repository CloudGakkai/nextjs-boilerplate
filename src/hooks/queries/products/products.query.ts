import { useQuery } from "@tanstack/react-query";
import { api, queryClient } from "~/services";

import { PRODUCT_LIST_QUERY } from "~/constants/query";

import type { ProductType } from "~/types";

interface GetProductsPayload {
  skip?: number;
  limit?: number;
}

interface GetProductsResponse {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = async (payload?: GetProductsPayload) => {
  const params = new URLSearchParams(payload as Record<string, any>).toString();

  const { data } = await api.get<GetProductsResponse>(`/products?${params}`);

  return data;
};

export const useProducts = (payload?: GetProductsPayload) => {
  return useQuery([PRODUCT_LIST_QUERY, JSON.stringify(payload)], () =>
    getProducts(payload),
  );
};

export const prefetchProducts = async (payload?: GetProductsPayload) => {
  /* istanbul ignore next */
  return await queryClient.prefetchQuery(
    [PRODUCT_LIST_QUERY, JSON.stringify(payload)],
    () => getProducts(payload),
  );
};

export const invalidateProducts = async () => {
  /* istanbul ignore next */
  return await queryClient.invalidateQueries([PRODUCT_LIST_QUERY]);
};
