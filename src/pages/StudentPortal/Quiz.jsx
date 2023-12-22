import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import QuizBox from "../../components/QuizBox/QuizBox";
import Snav from "../../components/Snav/Snav";
import { useGetQuizQuery } from "../../features/quiz/quizAPI";

const Quiz = () => {
  const { videoId } = useParams();
  const {
    data: quizzes,
    isLoading,
    isSuccess,
    isError,
  } = useGetQuizQuery(videoId);

  let content;
  if (isLoading && !isError) {
    content = <div>Loading....</div>;
  } else if (!isLoading && !isError && quizzes.length > 0) {
    content = quizzes.map((quiz) => <QuizBox quiz={quiz}></QuizBox>);
  }
  return (
    <>
      <Helmet>
        <title>Quizz</title>
      </Helmet>
      <Snav></Snav>
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-7xl px-5 lg:px-0">
          <div class="mb-8">
            <h1 class="text-2xl font-bold">
              Quizzes for "Debounce Function in JavaScript - JavaScript Job
              Interview question"
            </h1>
            <p class="text-sm text-slate-200">Each question contains 5 Mark</p>
          </div>
          <div class="space-y-8 ">{content}</div>

          <button class="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Quiz;
