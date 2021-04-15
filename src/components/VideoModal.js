import { Modal } from 'react-bootstrap';
import { useState, useRef } from 'react';


const init = {
  set: false,
  orient: true,
  width: 500,
  height: undefined
}

const VideoModal = (props) => {

  const [dim, setDim] = useState(init);

  const vidRef = useRef();
  // const node = document.getElementById('video');
  if (vidRef.current && !dim.set) {
    const { videoWidth, videoHeight } = vidRef.current;
    console.log(videoWidth, videoHeight);
    if (videoHeight > window.innerHeight * 0.8 && dim.orient && !dim.set)
      setDim(prev => ({ ...prev, 
        set: true,
        orient: false, 
        height: window.innerHeight * 0.7 }))
    else if (!dim.set)
      setDim(prev => ({ ...prev, 
        set:true,
        orient: true, 
        width: Math.min(500, window.innerWidth * 0.7) }))
  }

  return (
    <Modal
      {...props}
      size="lg"
      id='video-player'
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        border: '1px solid #e46f16',
      }}
    >
      <Modal.Body
        style={{
          overflowY: 'auto',
        }}>
        <video autoPlay
          id='video'
          ref={vidRef}
          controls
          width={dim.width}
          height={dim.height}
          style={{
            //  width: '100vw'
            // maxWidth:"70vw" 
            maxWidth: 700,
            maxHeight: 0.7 * window.innerHeight
          }}
        >
          <source src={props.src}>
          </source>
        </video>

      </Modal.Body>
    </Modal>
  )
}
export default VideoModal;