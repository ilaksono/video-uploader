import {useState} from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState(false);


  const authenticate = () => {
    setAuth(true);
  }

  const logout = () => {
    setAuth(false);
  }

  return {
    auth,
    authenticate,
    logout
  }
}
export default useAuth;