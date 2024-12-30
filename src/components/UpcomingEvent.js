import '../styles/UpcomingEvent.css';

import cozy from '../images/cozy-party.JPG';
import dj from '../images/dj-buddy.JPG';
import karaoke from '../images/karaoke2.JPG';

export default function UpcomingEvent() {

	const eventList = [
		{ backImg: cozy, day: "FRI", date: "12/20", titleEvent: "COZY PARTY", desc: "DJ mike, Raybone, Saints"},
		{ backImg: karaoke, day: "WED", date: "12/25", titleEvent: "KARAOKE NIGHT", desc: "Sing your favorite song."},
		{ backImg: dj, day: "SAT", date: "12/28", titleEvent: "BUDDY DUBSTEPS", desc: "DJ Skuta, Magic Mike, Aaron Jay"},
	];

	return (
		<div className="event-list">
			<h2>UPCOMING EVENTS:</h2>
			{eventList.map((row, index) => (
				<div className="event" key={index}>
					<img src={row.backImg} alt="event-img" />
					<div className="event-date">
						<span>{row.day}</span>
						<span>{row.date}</span>
					</div>
					<div className="event-detail">
						<h3>{row.titleEvent}</h3>
						<span>{row.desc}</span>
					</div>
				</div>
			))}
		</div>
	);
}