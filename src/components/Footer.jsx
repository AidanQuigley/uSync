import './Footer.css';

import socEmail from './img/email.png';
import socGoFundMe from './img/gofundme.png';
import socInsta from './img/insta.png';
import socTwitch from './img/twitch.png';
import socTwitter from './img/twitter.png';
import socYT from './img/yt.png';

const Nav = () => {
    return (
        <footer>
                <div>
                <p style={{paddingTop: '20px'}}><a href='' style={{color: '#8D7DB5', textDecoration: 'underline'}}>Report A Problem</a></p>
                <ul id="socials">
                    <a href=''><li><img src={socTwitter}/></li></a>
                    <a href=''><li><img src={socInsta}/></li></a>
                    <a href=''><li><img src={socYT}/></li></a>
                    <a href=''><li><img src={socTwitch}/></li></a>
                    <a href=''><li><img src={socGoFundMe}/></li></a>
                    <a href=''><li><img src={socEmail}/></li></a>
                </ul>
                <p>usyncgg@gmail.com ©2022 by uSync LLC. <a href='' style={{color: '#8D7DB5'}}>Contact Us</a></p>
                <p>All content, games titles, trade names and/or trade dress, trademarks, 
                    artwork and associated imagery are trademarks and/or copyright material of their respective owners</p>
                <p>Version: <i>BETA</i></p>
                </div>
            </footer>
    );
}

export default Nav;