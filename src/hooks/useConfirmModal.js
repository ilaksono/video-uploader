import {useState} from 'react';

const init = {
  show: false,
  body: '',
  title: '',
  btnText: 'Submit',
  confirm: null,
  cancel: null
}

const useConfirmModal = () => {

  const [conMod, setConMod] = useState(init);

  const resetConfirmModal = () => {
    setConMod(init);
  }

  const createModal = (body, title, confirm = null, cancel = null, btnText = 'Submit') => {
    setConMod({show: true, body, title, btnText, confirm, cancel});
  }

  return {
    conMod,
    resetConfirmModal,
    createModal,
  }
}
export default useConfirmModal;