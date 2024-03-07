import { Admin } from "../Assets/Constants/Constants";
import { Student } from "../Assets/Constants/Constants";
import "./DashBoard.css";
import dp from ".././Assets/images/dp.png";

function Navbar() {
	return (
		<div className="wrapper">
			<h1>Course app</h1>
			<div className="profile">
				<div className="dot"></div>
				<img className="profileDp" src={dp} />
				<div className="ProfileInfo">
					<label>Student</label>
					<label>9919696764</label>
					<label className="online">Online</label>
				</div>
			</div>

			<label className="itemTitle">Student</label>

			{Student.map((StudentItems, StudentIndex) => (
				<div className="item" key={StudentIndex}>
					<img className="icon" src={StudentItems.icon} />
					{StudentItems.label === "Logout" ? (
						<label style={{ color: "red" }}>{StudentItems.label}</label>
					) : (
						<label>{StudentItems.label}</label>
					)}
				</div>
			))}

			<label className="itemTitle">Superadmin</label>
			{Admin.map((AdminItems, AdminIndex) => (
				<div className="item" key={AdminIndex}>
					<img className="icon" src={AdminItems.icon} />
					{AdminItems.label === "Logout" ? (
						<label style={{ color: "red" }}>{AdminItems.label}</label>
					) : (
						<label>{AdminItems.label}</label>
					)}
				</div>
			))}
		</div>
	);
}

export default Navbar;
