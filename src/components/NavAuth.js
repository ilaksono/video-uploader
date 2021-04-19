import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AppContext from 'AppContext';
import { useContext, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import S3FileUpload from 'react-s3';
import * as hf from 'helpers/helperFuncs';

export default () => {
  const history = useHistory();
  const formRef = useRef();

  const {
    auth,
    logout,
    createModal,
    setVideos
  } = useContext(AppContext);

  const fileRef = useRef();

  
  const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  
  const handleLogout = () => {
    logout();
    setCookie('auth', '', '/')
    history.push('/auth')
  }

  const handleCancel = () => {
    formRef.current && formRef.current.reset();
  }
  
  const handleUpload = async () => {
    setLoading(true);

    const url = window.URL.createObjectURL(fileRef.current.files[0])
    setVideos(prev => [...prev, { url, created_at: new Date() }])
    try {
      const s3 = await S3FileUpload
        .uploadFile(fileRef.current.files[0],
          hf.configBucket('videos', auth));

      const res = await axios
        .post('/api/videos', {
          cmd: 'upload', id: Number(auth),
          url: s3.location
        });
      const {
        msg,
        data,
        err
      } = res.data;
      if (err || msg)
        return console.error(msg);

      else if (data)
        console.log('uploaded');

    } catch (er) {
      console.error(er);
    }
    setLoading(false);
    formRef.current && formRef.current.reset();
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
      <form
      ref={formRef}
      >

        <Form.File
          custom
          ref={fileRef}
          disabled={loading}
          label={<Button
            disabled={loading}
          >{loading ?
            <div
              style={{
                minHeight: 20,
                minWidth: 54
              }}

            >
              <Spinner
                animation='border'
                size='sm'
                style={{
                  color: 'white'
                }}
              />
            </div>
            : 'Upload'}</Button>}
          onChange={() => createModal('Do you want to upload?', 'Upload', handleUpload, handleCancel)}
        />
      </form>
    </div>
  )
}