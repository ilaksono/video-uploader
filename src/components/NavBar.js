import AppContext from 'AppContext';
import { useContext, useEffect } from 'react';
import NavNoAuth from './NavNoAuth';
import NavAuth from './NavAuth';
import { useCookies } from 'react-cookie';


const NavBar = () => {

  const {
    auth,
    authenticate,
    logout
  } = useContext(AppContext);

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    cookies.auth ?
      authenticate() :
      logout();
  }, [])

  return (
    <nav className='nav-container'>
      {
        auth ?
          <NavAuth /> :
          <NavNoAuth />
      }
    </nav>
  )
}
export default NavBar;