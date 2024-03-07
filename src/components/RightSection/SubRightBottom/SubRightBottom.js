import "./SubRightBottom.css";
import B from "../../Assets/icons/B.png";
import i from "../../Assets/icons/i.png";
import table from "../../Assets/icons/table.png";
import dropdown from "../../Assets/icons/dropdown.png";
import question from "../../Assets/icons/question.png";
import list from "../../Assets/icons/dot-list.png";

const SubRightBottom = () => {
	return (
		<div className="container">
			<div className="top">
				<div className="left">
					<div className="subleft1">
						<div>
							<img src={B} />
							<img src={i} style={{ marginLeft: "0.8rem" }} />
						</div>

						<img src={list} />
					</div>

					<div className="subleft2">
						<img src={table} />
						<img src={table} />
					</div>
				</div>
				<div className="right">
					<div className="subright1">
						<label>Paragraph</label> <img src={dropdown} />
					</div>
					<div className="subright2">
						<label>Source</label> <img src={dropdown} />
					</div>
				</div>
			</div>

			<div className="bottom">
				<div className="bottomLabelContainer">
					<p>Text Format</p>
					<div className="rightbottomLabelContainer">
						<p>About text formats</p>
						<img src={question} />
					</div>
				</div>

				<select
					style={{
						border: "2px solid #bfbfbf",
						width: "100%",
						padding: "8px",
						borderRadius: "0",
						background: "transparent",
					}}
				>
					<option>Full HTML</option>
					<option>1</option>
					<option>2</option>
				</select>
			</div>
		</div>
	);
};

export default SubRightBottom;
