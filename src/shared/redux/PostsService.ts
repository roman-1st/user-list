import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Post} from "../types/Post";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], number>({
            query: (count) => ({url: `/posts?_limit=${count}`, method: "get"}),
            keepUnusedDataFor: 0,
        }),
        getOnePost: builder.query<Post, number>({
            query: (page) => ({url: `/posts/${page}`, method: "get"}),
        }),
    }),
})