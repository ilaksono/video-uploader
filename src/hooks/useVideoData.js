import { useState } from 'react';
import axios from 'axios';

const init = []
const initPlay = {
  show: false,
  location: ''
}

const useVideoData = () => {
  const [videos, setVideos] = useState([])
  const [play, setPlay] = useState(initPlay);

  const fetchVideosAPI = async (id) => {
    try {

      const res = await axios.post('/api/videos', { id: Number(id) });

      const {
        data,
        msg,
        er
      } = res.data;

      if (er || msg)
        return false;
      if(data) {
        setVideos(data);
      } 

    } catch (er) {
      console.error(er);
      return false;
    }

  }

  return {
    videos,
    setVideos,
    play,
    setPlay,
    fetchVideosAPI
  }
}

export default useVideoData;