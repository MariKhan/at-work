import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: 'same-origin',

  }),
  tagTypes: [
  ],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
