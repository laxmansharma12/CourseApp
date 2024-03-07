import { IoSearchOutline } from "react-icons/io5";
import "./Navbar.css";
import dp from ".././Assets/images/dp.png";

const TopSearch = () => {
	return (
		<div className="nav">
			<div className="searchContainer">
				<div className="inputSection">
					<IoSearchOutline className="icon" />
					<input className="navbar" placeholder="Search by Phone no." />
				</div>
				<button>Search</button>
			</div>
			<img className="Navdp" src={dp} />
		</div>
	);
};

export default TopSearch;
