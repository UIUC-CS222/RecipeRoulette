import './Navbar.css';
import Logo from './Logo';

function Navbar(){
    return (
        <div className="nav-content">
            <Logo />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/search">Recipes</a></li>
                <li><button className="cta-content">Login</button></li>
            </ul>
        </div>
    );
}

export default Navbar;