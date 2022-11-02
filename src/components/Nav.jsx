import logo from './img/usync.png';
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav>
                <a href='..'><img id='navLogo' className='desktop' src={logo}/></a>
                <ul id='navList'>
                    <a href='..'><li id='navHome'>Home</li></a>
                        <li id='navGames'>
                            <a href='../games'>Games</a>
                            <ul id='gamesDropDown'>
                                <a href='../games/call-of-duty'><li className='ddGame'>Call of Duty</li></a>
                                <a href='../games/warzone'><li className='ddGame'>Warzone</li></a>
                                <a href='../games/league-of-legends'><li className='ddGame'>League of Legends</li></a>
                                <a href='../games/halo'><li className='ddGame'>Halo</li></a>
                                <a href='../games/rocket-league'><li className='ddGame'>Rocket League</li></a>
                                <a href='../games/valorant'><li className='ddGame'>VALORANT</li></a>
                            </ul>
                        </li>
                    <a href='../coming-soon'><li id='navComingSoon'>Coming Soon</li></a>
                    <a href='../more'><li id='navMore'>More</li></a>
                </ul>
            </nav>
        </>
    );
}

export default Nav;