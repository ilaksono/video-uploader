import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default () => {

  return (
    <Link to='/auth'>
      <Button >
        Login
    </Button>
    </Link>
  )
}