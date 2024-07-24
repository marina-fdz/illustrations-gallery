import '../styles/Menu.scss';

import { Link } from "react-router-dom";



function Menu() {
  return (
    <nav className='menu'>
        <ul className='menu__ul'>
            <li><Link to='/'>Work</Link></li>
            <li><a href="https://www.instagram.com/_marinafdz_/" target='_blank'>Instagram</a></li>
        </ul>
    </nav>
    
  )
}

export default Menu