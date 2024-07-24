import '../styles/Header.scss';

import Menu from "./Menu"


function Header() {
  return (
    <header className='header'>
        <div className='header__logo'></div>
        <Menu />
    </header>
  )
}

export default Header