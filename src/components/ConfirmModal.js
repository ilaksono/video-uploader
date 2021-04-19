import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect } from 'react';

const ConfirmModal = ({ conMod, resetConfirmModal }) => {

  const handleConfirm = (e = {}) => {
    if (e.preventDefault)
      e.preventDefault();
    conMod.confirm();
    resetConfirmModal();
  }

  function checkSubmit(e) {
    if (e && e.keyCode == 13) {
      handleConfirm();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', checkSubmit);
    return () => window.removeEventListener('keydown', checkSubmit);
  }, [conMod.confirm])

  const handleCancel = () => {
    if (conMod.cancel)
      conMod.cancel();
    resetConfirmModal()
  }

  return (
    <Modal
      show={conMod.show} onHide={handleCancel}
      >
      <Form onSubmit={handleConfirm}
      >
        <Modal.Header closeButton>
          <Modal.Title>{conMod.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {conMod.body}
          <Button variant="cancel" onClick={handleCancel}>
            Close
          </Button>
          <Button
            autoFocus={true}
            type='submit'
            variant="primary">
            {conMod.btnText}
          </Button>
        </Modal.Body>
      </Form>
      {/* <Modal.Footer>
      </Modal.Footer> */}
    </Modal>
  )
}
export default ConfirmModal;