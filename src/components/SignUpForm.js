import { Form, Button, Spinner } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AppContext from 'AppContext';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const init = {
  username: '',
  password: '',
  cpassword: ''
}

const SignUpForm = () => {

  const [c, setCookie] = useCookies();

  const {
    authenticate
  } = useContext(AppContext);

  const [text, setText] = useState(init)
  const [err, setErr] = useState('');

  const [load, setLoad] = useState(false);

  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (text.cpassword !== text.password)
      return setErr('Passwords must match');
    if (!text.username || !text.password)
      return setErr('Fields cannot be empty');
    // const username = process.env.REACT_APP_SAMPLE_USER;
    // const password = process.env.REACT_APP_SAMPLE_PASS;
    try {
      const res = await axios
        .post('/api/signup', {
          username: text.username,
          password: text.password
        });
      console.log(res);
      const {
        msg,
        err,
        data
      } = res.data;
      if (data) {

        authenticate(data.id || text.username);
        setCookie('auth', data.id, '/')
        return history.push('/home');

      } else
        if (err)
          return setErr(msg)

    } catch (er) {
      console.error(er);
    }
    // if (username === text.username && password === text.password) {
    // }
    // else setErr('Invalid login attempt');
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
        <Form.Group>
          <Form.Label>
            Confirm Password:
          </Form.Label>
          <Form.Control
            name='cpassword'
            type='password'
            value={text.cpassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type='submit' disabled={load}>
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
            'Register'
          }
        </Button>
        {
          !load &&
          <Link to='/auth'>
            Login
      </Link>
        }
      </Form>
    </>

  );
}

export default SignUpForm;