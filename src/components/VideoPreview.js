import { Button } from 'react-bootstrap';
import AppContext from 'AppContext';
import { useContext } from 'react';


const VideoPreview = ({ src }) => {

  const {
    setPlay
  } = useContext(AppContext);


  return (
    <>
      <video style={{
        width: 240,
        height: 180
      }}>
        <source src={src}>
        </source>
      </video>
      <Button onClick={() => setPlay({show: true, location: src})}>
        Play
    </Button>

    </>
  )
}
export default VideoPreview;