import '../styles/Menu.scss';

import { Link } from "react-router-dom";

import Search from "./Search";


function Menu({ search, setSearch, types}) {
  return (
    <nav className='menu'>
        <ul className='menu__ul'>
            <li><Link to='/'>Work</Link></li>
            <li>{<Search search={search} setSearch={setSearch} types={types}/>}</li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    
  )
}

export default Menu