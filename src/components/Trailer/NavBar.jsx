import './Navbar.css'
import { Link } from "react-router-dom"
function NavBar() {
  return (
    <div>
         <nav className='Navbar'>
            <ul>
                <li><Link to = '/' id='link'>Home</Link></li>
                <li><Link to= '/Description' id='link'>Trailer-Page</Link></li>
            </ul>
        </nav>
       
    </div>
  )
}

export default NavBar