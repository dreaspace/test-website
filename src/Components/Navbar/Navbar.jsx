import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'> 
      <div className="nav-logo">Cat</div> {/* div.nav-logo shortcut */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
        <li>Help</li>
      </ul>
    </div>
  )
}

export default Navbar