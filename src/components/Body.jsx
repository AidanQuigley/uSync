import './Body.css';
import apexUC from './img/apexUC.jpg';
import codVAN from './img/codVAN.jpg';
import codWZ from './img/codWZ.jpg';
import halo from './img/halo.jpg';
import LOL from './img/LOL.jpg';
import ow2 from './img/ow2UC.jpg';
import RL from './img/RL.jpg';
import smash from './img/smashUC.jpg';
import val from './img/val.jpg';

const Body = () => {
    return (
        <div>
            <div id='heading'>
                <div id='heading-textarea'>

                </div>
            </div>
            <div id='supported-titles'>
                <h1 className='sectionTitle'>Supported Titles</h1>
                <ul className='titlesList'>
                    <a href=''><li className='titles'><img className='titlesImg' src={halo}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={codVAN}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={codWZ}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={LOL}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={RL}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={val}/></li></a>
                </ul>
            </div>
            <div id='lan-events'>
                <h1 className='sectionTitle'>LAN Events</h1>
                <div style={{position: 'relative', width: '70%', left: '15%', padding: 'none', margin: 'none'}}>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F" width="100%" height="640"></iframe>
                </div>
            </div>
            <div id='coming-soon'>
                <h1 className='sectionTitle'>Coming Soon!</h1>
                <ul className='titlesList'>
                    <a href=''><li className='titles'><img className='titlesImg' src={ow2}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={smash}/></li></a>
                    <a href=''><li className='titles'><img className='titlesImg' src={apexUC}/></li></a>
                </ul>
            </div>
        </div>
    );
}
export default Body;