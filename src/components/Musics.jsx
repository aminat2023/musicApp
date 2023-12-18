import Card from "./shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Musics({ item, clickHandler }) {
	return (
		<div key={item.id} className="details-card">
			<Card>
				<img src={item.image} alt="" />
				<br />
				<h1>{item.Album}</h1>
				<br />
				<b>Name: {item.Artist_Name}</b>
				<br />
				<b>Stage Name:{item.stage_Name}</b>
				<br />

				<button className="play-btn">
					<FontAwesomeIcon fontSize={"24px"} color="black" icon={faPlay} />
				</button>
				<Link to={`/musicProduct/${item.id}`}>more view</Link>
			</Card>

			<button onClick={() => clickHandler(item)}>Buy${item.Price}</button>
		</div>
	);
}

export default Musics;
