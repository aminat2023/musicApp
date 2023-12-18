import { FaCartShopping } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav({ size, setShow }) {
	return (
		<>
			<nav className="navbar-item">
				<h1 className="navbar-logo">MuZic</h1>
				<ul>
					<li onClick={() => setShow(true)}>
						<Link to="/">Home</Link>
					</li>
					<li>
						{" "}
						<Link to="/descovery">Discovery</Link>
					</li>
					<li>
						{" "}
						<Link to="/musicProduct">Products</Link>
					</li>
				</ul>
				<div>
					<input type="text" placeholder="Search your favourite music" />
					<IoSearchOutline margin-left="1rem" />
				</div>
				<button>Login</button>
				<div className="cartName" onClick={() => setShow(false)}>
					<span>{size}</span>
					<span>
						<FaCartShopping fontSize={"2.5rem"} color="white" />
					</span>
				</div>
			</nav>
			<h2>RECOMMENDED FOR YOU.......</h2>
			<hr  color="coral"/>
		</>
	);
}

export default Nav;
