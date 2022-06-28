import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IPosts {
  userId?: number
  id?: number
  title?: string
  body?: string
}

const Headers = () => {
  return {'Content-type': 'application/json; charset=UTF-8'}
}

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints:(builder) => ({
    getPosts: builder.query<IPosts[], void>({
      query:()=> '/posts'
    }),
    getPost: builder.query<IPosts, number>({
      query:(id)=> `/posts/${id}`
    }),
    addPost: builder.mutation<void, IPosts>({
      query: post => ({
        url: '/posts',
        method: 'POST',
        headers: Headers(),
        body: post
      })
    }),
    updatePost: builder.mutation<void, IPosts>({
      query: ({ id, ...rest}) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        headers: Headers(),
        body: rest
      })
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        headers: Headers(),
      })
    })
  })
})

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi