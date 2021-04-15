import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AppContext from 'AppContext';
import { useContext, useRef } from 'react';
import { useCookies } from 'react-cookie';

export default () => {
  const history = useHistory();
  const {
    logout,
    createModal,
    setVideos
  } = useContext(AppContext);

  const fileRef = useRef();

  const [cookies, setCookie] = useCookies();

  const handleLogout = () => {
    logout();
    setCookie('auth', false, '/')
    history.push('/auth')
  }

  const handleUpload = () => {
    const location = window.URL.createObjectURL(fileRef.current.files[0])
    setVideos(prev => [...prev, { location }])
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    }}>
      <Link to='/home'>
        <Button>
          Home
        </Button>
      </Link>
      <Button onClick={() => createModal('Do you want to logout?', 'Logout', handleLogout)}>
        Logout
      </Button>

      <Form.File
        custom
        ref={fileRef}
        label={<Button>Upload</Button>}
        onChange={() => createModal('Do you want to upload?', 'Upload', handleUpload)}
      />
    </div>
  )
}