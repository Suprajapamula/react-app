
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `/all`,
    }),
    getCountryDetailsByName:builder.query({
      query:(cname)=>`/name/${cname}`
    })
  }),
})
export const { useGetAllCountriesQuery,useGetCountryDetailsByNameQuery } = countriesApi