import '../App.css';
import Logo from './Logo';

let NavBar = ({children}) => {
    return (
        <nav className="nav-bar">
            <Logo />
            { children }
        </nav>
      )
}

export default NavBar;