import { useState, useEffect } from 'react';

import '../styles/NavigationBar.css';

export default function NavigationBar() {
	const [showNav, setShowNav] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > window.innerHeight-500) {
        if (currentScrollY < lastScrollY) {
          setShowNav(true); // Show navbar when scrolling up
        } else {
          setShowNav(false); // Hide navbar when scrolling down
        }
      } else {
        setShowNav(true); // Always show navbar above 100vh
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

	return (
		<div className={`navigation-bar ${showNav ? "visible" : "hidden"}`}>
			<ul>
				<li><span>Menu</span></li>
				<li><span>Service</span></li>
				<li><span>Event</span></li>
				<li><span>Blogs</span></li>
				<li><span>Contact</span></li>
			</ul>
		</div>
	);
}