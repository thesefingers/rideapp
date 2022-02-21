import { Link } from 'react-router-dom';
import Drop from './Filter';

const Subhead = () => {
  return (
    <div className="d-flex bd-highlight mb-3">
      <div className="p-2 bd-highlight">
        <Link classNmae='link' to='/'>
          Nearest Rides</Link>
      </div> <div className="p-2 bd-highlight">
        <Link classNmae='link' to='/Upcoming'>
          Upcoming Rides</Link>
      </div> <div className="p-2 bd-highlight">
        <Link classNmae='link' to='/Past'>
          Past Rides</Link>
      </div>

      <Drop />

    </div>

    

    

  )
}


export default Subhead;