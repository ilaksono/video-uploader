import LoginForm from 'components/LoginForm';
import axios from 'axios'

const LoginView = () => {

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
        Log into your account
          </div>
      <div className={`container`}
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className="widget-box login-box" >
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginView;
