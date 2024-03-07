import DashBoard from "./LeftSection/DashBoard";
import Navbar from "./Navbar/Navbar";
import Form from "./RightSection/Form/Form";
import SubRight from "./RightSection/SubRight/SubRight";

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
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
