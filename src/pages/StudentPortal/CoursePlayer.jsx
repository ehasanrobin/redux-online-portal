import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Player from "../../components/Player/Player";
import Snav from "../../components/Snav/Snav";
import Videos from "../../components/Videos/Videos";
import { useGetVideoQuery } from "../../features/videos/videosAPI";

const CoursePlayer = () => {
  const [skip, setSkip] = useState(true);
  const { id } = useParams();
  const {
    data: video,
    isLoading,
    isError,
    isSuccess,
  } = useGetVideoQuery(id, {
    skip,
  }) || {};

  useEffect(() => {
    if (id) {
      setSkip(false);
    }
  }, [id]);

  let content;
  if (video?.id) {
    content = <Player video={video}></Player>;
  }
  return (
    <>
      <Helmet>
        <title>player</title>
      </Helmet>
      <Snav></Snav>

      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-7xl px-5 lg:px-0">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            {content}
            <Videos></Videos>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePlayer;
