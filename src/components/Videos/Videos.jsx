import React from "react";
import { useGetVideosQuery } from "../../features/videos/videosAPI";
import Video from "../Video/Video";

const Videos = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();

  let content;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>an error has occured</div>;
  } else if (!isLoading && !isError && videos.length === 0) {
    content = <div>No videos Found</div>;
  } else if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => <Video video={video}></Video>);
  }
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {content}
    </div>
  );
};

export default Videos;
