import MenuShowcase from './components/MenuShowcase';
import NavigationBar from './components/NavigationBar';
import UpcomingEvent from './components/UpcomingEvent';

import logo from './assets/menu-logo.png';

import fb from './assets/fb.svg';
import insta from './assets/insta.svg';
import twitter from './assets/twitter.svg';
import tiktok from './assets/tiktok.svg';

import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.webp';
import event4 from './images/event4.jpg';
import event5 from './images/event5.jpg';
import event6 from './images/event6.jpg';

import serving from './images/serving-bottle.webp';
import table from './images/vip-lounge.png';

import kalahariBackground from './images/kalahari-background.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <div className="landing-section">
        <img src={kalahariBackground} />
      </div>

      <div className="reservation-section">
        <img src={table} alt="res-left" />
        <div className="slogan">
          <h2>Kalahari Lounge | Club</h2>
          <h4>Make Some Memorable Night</h4>
          <h3>WHERE ART, MUSIC AND ADVENTURE COLLIDES</h3>
          <p>
          Secure a spot in our VIP lounge for your friends to place to drink and to have fun! The reservation
          comes with the a liquor bottle that will be serve by our finest servers to make you enjoy the table.
          </p>
          <button>BOOK RESERVATION</button>
        </div>
        <img src={serving} alt="res-right" />
      </div>

      <UpcomingEvent />

      <MenuShowcase />

      <div className="footer-section">
        <div className="signup-box">
          <h3>Subcribe to Next Event</h3>
          <div className="subcribe">
            <form action="">
              <input type="email" placeholder='Email' />

              <p>Terms & Agreements:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus natus voluptas pariatur a, vel voluptate velit. 
              Molestiae omnis molestias magnam nemo necessitatibus, excepturi suscipit, nulla veritatis vero dolorem a.</p>
              <button>Sign up!</button>
            </form>
          </div>
        </div>

        <div className="information">
          <div className="address">
            <p>202 - 120 2nd Ave N</p>
            <p>Saskatoon, SK, S7K 2B2</p>
          </div>

          <div className="time-sched">
            <p>HOURS:</p>
            <p>Monday - Thursday</p>
            <p>6:00pm - 2:00am</p>
            <p>Friday - Sunday</p>
            <p>6:00pm - 3:00am</p>
          </div>
          
          <div className='social-media'>
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
            <img src={tiktok} alt="tiktok" />
          </div>

          <img src={logo} alt="" />
        </div>

        <div className="gallery">
            <img src={event1} alt="event-1" />
            <img src={event2} alt="event-2" />
            <img src={event3} alt="event-3" />
            <img src={event4} alt="event-4" />
            <img src={event5} alt="event-5" />
            <img src={event6} alt="event-6" />
          </div>
        </div>
    </div>
  );
}

export default App;
