

import { Link } from 'react-router-dom';


const Drop = () => {
    return (
  <div className="ms-auto p-2 bd-highlight">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                           Filter
                    </button>
                     <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li>
                           <Link className="dropdown-item active" href="#" />
                               Action
                        </li>
                        <li>
                           <Link className="dropdown-item" href="#" />
                               Another action
                        </li>
    
                     </ul>
                </div>
      
             </div>



    )
}

export default Drop;