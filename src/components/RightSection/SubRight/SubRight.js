import React from "react";
import "./SubRight.css";

const SubRight = () => {
	return (
		<div className="Container">
			<div className="Header">
				<h1>Installment details</h1>
			</div>
			<div className="subHeader">
				<div>
					<label style={{ width: "146px" }}>Installment no.</label>
					<input style={{ width: "146px" }} placeholder="1"></input>
				</div>
				<div>
					<label>Primary Installment Amount</label>
					<input></input>
					<p>Only Basic Amount</p>
				</div>
				<div>
					<label>Secondary Installment Amount</label>
					<input></input>
					<p>Only Basic Amount</p>
				</div>
				<div>
					<label>Due Date</label>
					<input type="date"></input>
				</div>
			</div>
			<button>Add Installment Details</button>
			<p>To Installment Details</p>
		</div>
	);
};

export default SubRight;
