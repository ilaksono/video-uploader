import VideoPreview from 'components/VideoPreview';
import AppContext from 'AppContext';
import { useContext, useEffect } from 'react';

export default () => {

  const {
    auth,
    videos,
    fetchVideosAPI
  } = useContext(AppContext);

  useEffect(() => {
    fetchVideosAPI(auth)
  }, [auth])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url('/homebg.jpeg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop: 24
    }}>

      <div className='dashboard-box'>
        <div
        className='video-grid'
        >
          {
            videos.map((each, i) => <VideoPreview
              key={i}
              {...each}
            />)
          }
        </div>
      </div>
    </div>
  )
}