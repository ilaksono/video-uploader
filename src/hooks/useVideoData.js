import { useState } from 'react';


const init = []
const initPlay = {
  show: false,
  location: ''
}

const useVideoData = () => {
  const [videos, setVideos] = useState([])
  const [play, setPlay] = useState(initPlay);
  return {
    videos,
    setVideos,
    play,
    setPlay
  }
}

export default useVideoData;