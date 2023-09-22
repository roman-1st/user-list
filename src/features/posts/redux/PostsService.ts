import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({url: `/posts`, method: "get"}),
        }),
        getOnePost: builder.query({
            query: (page) => ({url: `/posts/${page}`, method: "get"}),
        }),
    }),
})