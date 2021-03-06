import { Form, Button, Spinner } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AppContext from 'AppContext';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const init = {
  username: '',
  password: ''
}

const LoginForm = () => {

  const [c, setCookie] = useCookies();

  const {
    authenticate
  } = useContext(AppContext);

  const [text, setText] = useState(init)
  const [err, setErr] = useState('');
  const [load, setLoad] = useState(false);

  const history = useHistory();

  const submitForm = async (e) => {
    setLoad(true);
    e.preventDefault();

    // if (!text.username || !text.password) return setErr('Fields cannot be empty');
    // const username = process.env.REACT_APP_SAMPLE_USER;
    // const password = process.env.REACT_APP_SAMPLE_PASS;
    // if (username === text.username && password === text.password) {

    try {
      const res = await axios.post('/api/auth', text);
      const {
        err,
        data,
        msg
      } = res.data;
      if (data) {
        authenticate(data.id || text.username);
        setCookie('auth', data.id, '/')
        return history.push('/home');
      }
      else if (err) {
        setErr(msg);
      }
    } catch (er) {
      console.error(er);
    }
    setLoad(false);
  }


  const handleChange = (e) => {
    if (err) setErr('');
    setText(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Form
        className='login-form'
        onSubmit={submitForm}>
        {err && <div>{err}</div>}
        <Form.Group>
          <Form.Label>
            Username:
          </Form.Label>
          <Form.Control
            name='username'
            type='text'
            value={text.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Password:
          </Form.Label>
          <Form.Control
            name='password'
            type='password'
            value={text.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          disabled={load}
          type='submit'
        >
          {load ?
            <div
              style={{
                minHeight: 20,
                minWidth: 45
              }}
            > <Spinner
                animation='border'
                size='sm'
                style={{
                  color: 'white'
                }}
              />
            </div>
            :
            'Login'
          }
        </Button>
        {
          !load &&
          <Link to='/signup'>
            Register
      </Link>
        }
      </Form>
    </>

  );
}

export default LoginForm;