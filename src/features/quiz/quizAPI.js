import { apiSlice } from "../api/apiSlice";

const quizAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
    }),
  }),
});

export const { useGetQuizQuery } = quizAPI;
