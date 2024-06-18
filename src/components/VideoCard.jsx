import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mb-4">
        <img className="rounded-t-lg" src={thumbnails.high.url} alt="" />

        <ul className="p-5">
          <li className="font-bold py-2 text-gray-900 dark:text-black">
            {title}
          </li>

          <li className=" text-gray-900 dark:text-black">{channelTitle}</li>

          <li className="  text-gray-700 dark:text-black">
            {statistics.viewCount}
          </li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
