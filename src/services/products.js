import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
    }),
    deleteProduct:builder.mutation({
      query:(id)=>{
        return {url: `/${id}`,
              method: 'DELETE',
            }
      }
    }),
    addProduct:builder.mutation({
      query:(newProduct)=>{
           return{
            url:'/',
            metod:"POST",
            body:newProduct
          }
      }
    })
  }),
})
export const {useAddProductMutation,useLazyGetAllProductsQuery,useGetAllProductsQuery ,useDeleteProductMutation} = productsApi