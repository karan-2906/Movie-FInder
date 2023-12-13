import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const page = 1;


export const TMBDAPI = createApi({
    reducerPath: 'TMBDAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `movie/popular?api_key=98657e2e8336619db75d1e4a585236bd&language=en-US&page=${page}`,
        }),
        getMovie: builder.query({
            query: (id) => `movie/${id}?append_to_response=videos,credits&api_key=98657e2e8336619db75d1e4a585236bd&language=en-US`,
        }),
        getMovieDetails: builder.query({
            query: (id) => `movie/${id}?api_key=98657e2e8336619db75d1e4a585236bd&language=en-US`,
        }),
        getMovieCredits: builder.query({
            query: (id) => `movie/${id}/credits?api_key=9e9f3c1a1a5d4a8a1e4a1c6f2a7b5d1e&language=en-US`,
        }),
        getMovieReviews: builder.query({
            query: (id) => `movie/${id}/reviews?api_key=9e9f3c1a1a5d4a8a1e4a1c6f2a7b5d1e&language=en-US&page=${page}`,
        }),
        getMovieSearch: builder.query({
            query: (query) => `search/movie?api_key=9e9f3c1a1a5d4a8a1e4a1c6f2a7b5d1e&language=en-US&query=${query}&page=${page}`,
        }),
    }),
})

export const { useGetPopularMoviesQuery, useGetMovieQuery, useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetMovieReviewsQuery, useGetMovieSearchQuery } = TMBDAPI;