import {
  BrowserRouter as Router,
  Redirect,
  Switch, Route,
  useLocation
} from 'react-router-dom';

import routes from 'routes';
import NavBar from 'components/NavBar'
import Updates from 'components/Updates'
import AppContext from 'AppContext';
import { useContext, useEffect } from 'react';
import VideoModal from 'components/VideoModal';
import axios from 'axios'

function App() {

  const {
    auth,
    play,
    setPlay
  } = useContext(AppContext);

  const onHide = () => {
    setPlay({ show: false, location: '' })
  }

  return (
    <>
      <Router>
        {
          window.location.href.slice(-4) === 'home' &&
          <NavBar />
        }
        <Switch>
          {routes.map(each => <Route
            {...each}
          />)}
        </Switch>
        <Redirect to={auth ? '/home' : '/auth'} />
      </Router>
      <Updates />
      <VideoModal
        onHide={onHide}
        show={play.show}
        src={play.location}
      />
    </>
  );
}

export default App;
