import './Body.css';
import './App.css';

const Body = () => {
    return (
        <div>
            <div id='heading'>

            </div>
            <div id='supported-titles'>
                <h1 id='sectionTitle'>Supported Titles</h1>
                <div>
                    <ul>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                    </ul>
                </div>
            </div>
            <div id='lan-events'>
                <h1 id='sectionTitle'>LAN Events</h1>
            </div>
            <div id='coming-soon'>
                <h1 id='sectionTitle'>Coming Soon!</h1>
                <ul>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                        <li><img src=''/></li>
                </ul>
            </div>
        </div>
    );
}
export default Body;