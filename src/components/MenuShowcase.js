import logo from '../assets/menu-logo.png';
import arrow from '../assets/arrow-direct.svg';

import drink1 from '../images/cocktail1.jpg';
import drink2 from '../images/cocktail2.jpg';
import drink3 from '../images/cocktail3.jpg';

import '../styles/MenuShowcase.css';

export default function MenuShowcase() {
  return (
    <div className='menu-showcase'>
      <div className="menu-options">
        <button>DRINKS</button>
        <button>APPETIZERS</button>
        <button>ENTREE</button>
        <button>BOTTLES</button>
      </div>

      <div className="menu-display">
        <img src={logo} alt="kalahari-logo" className='background-logo'/>

        <div className="sample-foods">
          <img src={drink1} alt="food" />
          <img src={drink2} alt="food" />
          <img src={drink3} alt="food" />
        </div>

        <div className="menu-route">
          <img src={arrow} alt="arrow" />
          <span>Checkout more of our specialty!</span>
        </div>
      </div>
    </div>
  );
}