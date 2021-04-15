import { Button } from 'react-bootstrap';
import AppContext from 'AppContext';
import { useContext } from 'react';


const VideoPreview = ({ src }) => {

  const {
    setPlay
  } = useContext(AppContext);


  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <video style={{
        width: 240,
        height: 180
      }}>
        <source src={src}>
        </source>
      </video>
      <Button 
      style={{
        width:60,
        height:40
      }}
      onClick={() => setPlay({show: true, location: src})}>
        Play
    </Button>

    </div>
  )
}
export default VideoPreview;