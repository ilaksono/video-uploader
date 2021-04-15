import { Form, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from 'AppContext';
import { useCookies } from 'react-cookie';

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
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    if (!text.username || !text.password) return setErr('Fields cannot be empty');
    const username = process.env.REACT_APP_SAMPLE_USER;
    const password = process.env.REACT_APP_SAMPLE_PASS;
    if (username === text.username && password === text.password) {
      authenticate();
      setCookie('auth', true, '/')
      history.push('/home');
    }
    else setErr('Invalid login attempt');
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

        <Button type='submit'>
          Login
        </Button>
      </Form>
    </>

  );
}

export default LoginForm;