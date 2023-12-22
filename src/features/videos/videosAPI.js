import { apiSlice } from "../api/apiSlice";

export const videosAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query({
      query: () => "/videos",
    }),
    getVideo: build.query({
      query: (id) => `/videos/${id}`,
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery } = videosAPI;
