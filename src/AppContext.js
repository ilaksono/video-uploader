import React from 'react';
import useAuth from 'hooks/useAuth';
import useConfirmModal from 'hooks/useConfirmModal';
import useVideoData from 'hooks/useVideoData';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

  const {
    auth,
    logout,
    authenticate
  } = useAuth();

  const {
    videos,
    setVideos,
    play,
    setPlay,
    fetchVideosAPI
  } = useVideoData();

  const {
    conMod,
    resetConfirmModal,
    createModal,
  } = useConfirmModal();

  return (
    <AppContext.Provider value={{
      auth,
      authenticate,
      logout,

      // confirmModal
      conMod,
      resetConfirmModal,
      createModal,

      // videoData
      videos,
      setVideos,
      play,
      setPlay,
      fetchVideosAPI,
    }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContext;