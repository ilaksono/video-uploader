import VideoPreview from 'components/VideoPreview';
import AppContext from 'AppContext';
import {useContext} from 'react';

export default () => {

  const {
    videos
  } = useContext(AppContext);

  return (
    <div className='dashboard-box'>
      <div
      style={{
        display:'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}
      >
        {
          videos.map((each, i) => <VideoPreview 
          key={i}
          src={each.location}
          />)
        }
      </div>
    </div>
  )
}