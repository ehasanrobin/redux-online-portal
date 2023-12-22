import React from "react";
import { Link } from "react-router-dom";
import { useGetQuizQuery } from "../../features/quiz/quizAPI";

const Player = ({ video }) => {
  const { id, title, url, duration, description, views, createdAt } = video;
  const { data: quizz } = useGetQuizQuery(id);

  console.log(quizz);
  return (
    <div class="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        class="aspect-video"
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <h1 class="text-lg font-semibold tracking-tight text-slate-100">
          {title}
        </h1>
        <h2 class=" pb-4 text-sm leading-[1.7142857] text-slate-400">
          Uploaded on {createdAt}
        </h2>

        <div class="flex gap-4">
          <a
            href="#"
            class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            এসাইনমেন্ট
          </a>

          {quizz?.length && (
            <Link
              to={`/quizzers/${id}`}
              class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজে অংশগ্রহণ করুন
            </Link>
          )}
        </div>
        <p class="mt-4 text-sm text-slate-400 leading-6">{description}</p>
      </div>
    </div>
  );
};

export default Player;
