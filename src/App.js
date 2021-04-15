import {
  BrowserRouter as Router,
  Redirect,
  Switch, Route
} from 'react-router-dom';

import routes from 'routes';
import NavBar from 'components/NavBar'
import Updates from 'components/Updates'
import AppContext from 'AppContext';
import { useContext } from 'react';
import VideoModal from 'components/VideoModal';

function App() {

  const {
    auth,
    play,
    setPlay
  } = useContext(AppContext);

  const onHide = () => {
    setPlay({show:false, location:''})
  }

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {routes.map(each => <Route
            {...each}
          />)}
        </Switch>
        <Redirect to={auth ? '/home' : '/auth'} />
      </Router>
      <Updates />
      {
        play.show &&
      <VideoModal 
      onHide={onHide}
      show={play.show}
      src={play.location}/>
      }
    </div>
  );
}

export default App;
