import '../styles/Header.scss';

import Menu from "./Menu"


function Header({search, setSearch, types}) {
  return (
    <header className='header'>
        <div className='header__logo'>Logo</div>
        <Menu search={search} setSearch={setSearch} types={types} />
    </header>
  )
}

export default Header