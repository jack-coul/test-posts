import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommentDTO, PostDTO, PostsParams, TransformUsers, UserDTO } from './endpoints.types';

export const defaultApi = createApi({
  reducerPath: 'defaultApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostDTO[], PostsParams>({
      query: (params) => ({
        url: 'posts',
        params,
      }),
    }),
    getPost: builder.query<PostDTO, { id: number }>({
      query: ({ id }) => `posts/${id}`,
    }),
    getUsers: builder.query<TransformUsers[], void>({
      query: () => 'users',
      transformResponse: (users: UserDTO[]): TransformUsers[] => {
        return users.map((item) => ({ value: `${item.id}`, label: item.username }));
      },
    }),
    getUser: builder.query<UserDTO, { id: number }>({
      query: ({ id }) => ({
        url: `users/${id}`,
      }),
    }),
    getComments: builder.query<CommentDTO[], { postId: number }>({
      query: (params) => ({
        url: 'comments',
        params,
      }),
    }),
    addComment: builder.mutation<CommentDTO, Omit<CommentDTO, 'id'>>({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useGetPostsQuery, useGetPostQuery, useGetUsersQuery, useAddCommentMutation, useGetUserQuery } =
  defaultApi;
