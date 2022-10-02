import './App.css';
import Body from './Body.jsx';

const App = () => {
    return (
        <div>
            <nav>
                <img id='navLogo' src='../src/img/usync.png' />
                <ul id='navList'>
                    <li id='navHome'>Home</li>
                    <li id='navGames'>Games</li>
                    <li id='navComingSoon'>Coming Soon</li>
                    <li id='navMore'>More</li>
                </ul>
            </nav>
            <Body></Body>
            <footer>
                <div>
                <p style={{paddingTop: '20px'}}><a href='' style={{color: '#8D7DB5', textDecoration: 'underline'}}>Report A Problem</a></p>
                <ul id="socials">
                    <li><a href=''><img src='../src/img/twitter.png'/></a></li>
                    <li><a href=''><img src='../src/img/insta.png'/></a></li>
                    <li><a href=''><img src='../src/img/yt.png'/></a></li>
                    <li><a href=''><img src='../src/img/twitch.png'/></a></li>
                    <li><a href=''><img src='../src/img/gofundme.png'/></a></li>
                    <li><a href=''><img src='../src/img/email.png'/></a></li>
                </ul>
                <p>usyncgg@gmail.com ©2022 by uSync LLC. <a href='' style={{color: 'white'}}>Contact Us</a></p>
                <p>All content, games titles, trade names and/or trade dress, trademarks, 
                    artwork and associated imagery are trademarks and/or copyright material of their respective owners</p>
                <p>Version: <i>BETA</i></p>
                </div>
            </footer>
        </div>
    );
}

export default App;