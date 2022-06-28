import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IPosts {
  userId: string
  id: number
  title: string
  body: string
}

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints:(builder) => ({
    getPosts: builder.query<IPosts[], void>({
      query:()=> '/posts'
    }),
    getPost: builder.query<IPosts[], number>({
      query:(id)=> `/posts/${id}`
    }),
    addPost: builder.mutation<void, IPosts>({
      query: post => ({
        url: '/post',
        method: 'POST',
        body: post
      })
    }),
    updatePost: builder.mutation<void, IPosts>({
      query: ({ id, ...rest}) => ({
        url: `/post/${id}`,
        method: 'PUT',
        body: rest
      })
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/post/${id}`,
        method: 'PUT',
        body: id
      })
    })
  })
})

export const { useGetPostsQuery, useGetPostQuery } = postApi