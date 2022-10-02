import './App.css';
import Body from './Body.jsx';
import logo from './img/usync.png';
import socEmail from './img/email.png';
import socGoFundMe from './img/gofundme.png';
import socInsta from './img/insta.png';
import socTwitch from './img/twitch.png';
import socTwitter from './img/twitter.png';
import socYT from './img/yt.png';


const App = () => {
    return (
        <div>
            <nav>
                <img id='navLogo' src={logo}/>
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
                    <li><a href=''><img src={socTwitter}/></a></li>
                    <li><a href=''><img src={socInsta}/></a></li>
                    <li><a href=''><img src={socYT}/></a></li>
                    <li><a href=''><img src={socTwitch}/></a></li>
                    <li><a href=''><img src={socGoFundMe}/></a></li>
                    <li><a href=''><img src={socEmail}/></a></li>
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