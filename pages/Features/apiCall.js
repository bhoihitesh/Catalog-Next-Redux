import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export let apiCall = createApi({
    reducerPath: 'apiCall',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => ({
                url: 'products',
                method: 'GET'
            }),
        }),
        getPostbyid: builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: 'GET'
            }),
        }),
        getPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        getsingalPost: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                mehtod: 'GET'
            })
        })
    })
})

export let { useGetAllDataQuery, useGetPostbyidQuery, useGetPostQuery, useGetsingalPostQuery } = apiCall