import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
  tagTypes: ['products'],
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
        providesTags: ['products'],
    }),
    createProduct: builder.mutation({
        query: (data) => ({
            url: `/products`,
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['products'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useCreateProductMutation } = productAPI