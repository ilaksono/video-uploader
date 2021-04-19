import LoginForm from 'components/LoginForm';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import SignUpForm from 'components/SignUpForm';

const LoginView = () => {

  const { pathname } = useLocation();

  return (
    // <div classNameName='login-layout'>
    <div id="wrapper" style={{
      backgroundImage: `url('/bg.jpeg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'

    }}>
      <div style={{
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        marginBottom: 24,
        color: '#2D2D2D'
      }}>
        {pathname === '/auth' ? 'Log into ' : 'Create '}your account
          </div>
      <div className={`container`}
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className="widget-box login-box" >
          {
            pathname === '/auth' ? 
            <LoginForm />
            : <SignUpForm/>
          }
        </div>
      </div>
    </div>
  )
}

export default LoginView;
