import { Modal } from 'react-bootstrap';

const VideoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        border: '1px solid #e46f16',
        // width: Math.min(750, window.innerWidth * 0.8)
      }}
    >
      {/* <Modal.Header
        style={{
          backgroundColor: '#e46f16',
          color: 'white',
          fontSize: '1.2em'
        }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
        <ModalCloseButton onHide={props.onHide} />
      </Modal.Header> */}
      <Modal.Body
        style={{
          // minHeight: '70vh',
          // maxHeight: '80%',
          overflowY: 'auto',
          width: Math.min(750, window.innerWidth * 0.8)

        }}>
        <video autoPlay
          controls
          width={Math.min(750 * 7 / 8, window.innerWidth * 0.7)}
          style={{
            //  width: '100vw' 
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