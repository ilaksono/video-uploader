import { Button } from 'react-bootstrap';
import AppContext from 'AppContext';
import { useContext } from 'react';
import * as hf from 'helpers/helperFuncs';



const VideoPreview = ({ url, created_at }) => {

  const {
    setPlay
  } = useContext(AppContext);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    }}>
      <span>{hf.formatInterviewTimePM(created_at)}</span>
      <video style={{
        width: 240,
        height: 160,
        boxShadow: '0 1px 2px 0 grey',
        marginBottom: 6

      }}>
        <source src={url}>
        </source>
      </video>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        marginBottom:12
      }}>

        <Button
          variant='success'
          style={{
            width: 60,
            height: 40
          }}
          onClick={() => setPlay({ show: true, location: url })}>
          Play
    </Button>
        <a
          style={{
            color: 'black',
            fontSize: 20
          }}
          href={url} target="_blank" download>Download</a>
      </div>

    </div>
  )
}
export default VideoPreview;