import DashBoard from "./LeftSection/DashBoard";
import Navbar from "./Navbar/Navbar";
import Form from "./RightSection/Form/Form";
import SubRightBottom from "./RightSection/SubRightBottom/SubRightBottom";
import SubRight from "./RightSection/SubRightTop/SubRightTop";

const HomePage = () => {
	return (
		<div className="Main">
			<DashBoard />
			<div className="rightSection">
				<Navbar />
				<div className="SubRightSection">
					<div>
						<Form />
					</div>
					<div>
						<SubRight />
						<p className="title">Primary student T&C</p>
						<SubRightBottom />
						<p className="title">T&C 50% Participation</p>
						<SubRightBottom />
						<p className="title">Secondry Student T&C</p>
						<SubRightBottom />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
