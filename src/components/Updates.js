import ConfirmModal from './ConfirmModal';
import AppContext from 'AppContext'
import { useContext } from 'react';


const Updates = () => {

  const {
    conMod,
    resetConfirmModal,
  } = useContext(AppContext)

  return (
    <>

      {
        conMod &&
        <ConfirmModal
          // handleConfirm={handleModalConfirm}
          conMod={conMod}
          resetConfirmModal={resetConfirmModal}
        />
      }

    </>
  )
}
export default Updates;