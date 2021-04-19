import {useState} from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState('');


  const authenticate = (token) => {
    setAuth(token);
  }

  const logout = () => {
    setAuth('');
  }

  return {
    auth,
    authenticate,
    logout
  }
}
export default useAuth;