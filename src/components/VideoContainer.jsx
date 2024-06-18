import axios from "axios";
import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await axios.get(YOUTUBE_VIDEO_API+GOOGLE_API_KEY);
      setData(resp.data.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-evenly mt-3">
      {data.map((x) =><Link key={x.id} to={"/watch?v="+x.id}><VideoCard info={x}/></Link> )}
    </div>
  );
};

export default VideoContainer;
