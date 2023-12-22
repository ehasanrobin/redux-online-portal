import React from "react";
import Snav from "../../components/Snav/Snav";
import VideoList from "../../components/VideoList/VideoList";
import { useGetVideosQuery } from "../../features/videos/videosAPI";

const VideosList = () => {
  const {
    data: videosList,
    isLoading,
    isError,
    isSuccess,
  } = useGetVideosQuery();

  console.log(videosList);

  let content;
  if (isLoading && !isSuccess) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>An Error has occured</div>;
  } else if (!isLoading && !isError && videosList.length === 0) {
    content = <div>No Video Found</div>;
  } else if (!isLoading && !isError && videosList.length > 0) {
    content = videosList.map((video) => <VideoList video={video}></VideoList>);
  }
  return (
    <>
      <Snav></Snav>

      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-full px-5 lg:px-20">
          <div class="px-3 py-20 bg-opacity-10">
            <div class="w-full flex">
              <button class="btn ml-auto">Add Video</button>
            </div>
            <div class="overflow-x-auto mt-4">
              <table class="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th class="table-th">Video Title</th>
                    <th class="table-th">Description</th>
                    <th class="table-th">Action</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-slate-600/50">{content}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideosList;
