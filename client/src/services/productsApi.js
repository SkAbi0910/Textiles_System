import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({

    reducerPath:"productApi",
    baseQuery:fetchBaseQuery ({baseUrl: "http://localhost:8000/api/product"}),
    endpoints: (builder) =>({


        getProducts: builder.query({

            query:() =>"/list"
        }),


        singleProduct: builder.query({

            query:(id) =>`/single/${id}`
        })


    })
})

export const {useGetProductsQuery ,useSingleProductQuery} = productsApi;