import { Link } from 'react-router-dom';

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
     
      <div className="ms-auto p-2 bd-highlight">Flex item</div>
    </div>

  )
}


export default Subhead;