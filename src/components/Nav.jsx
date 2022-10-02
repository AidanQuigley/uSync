import logo from './img/usync.png';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <img id='navLogo' src={logo}/>
            <ul id='navList'>
                <a href=''><li id='navHome'>Home</li></a>
                <a href=''><li id='navGames'>Games</li></a>
                <a href=''><li id='navComingSoon'>Coming Soon</li></a>
                <a href=''><li id='navMore'>More</li></a>
            </ul>
        </nav>
    );
}

export default Nav;