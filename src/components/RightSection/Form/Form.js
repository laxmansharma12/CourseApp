import "./Form.css";

const FormMaster = () => {
	return (
		<div className="Wrapper">
			<h1>Add Batch</h1>
			<div className="inputContainer">
				<label>
					Batch Name <span>&#42;</span>
				</label>
				<input placeholder="nagulpranav2107@gmail.com" />
			</div>
			<div className="inputContainer">
				<label>
					Code <span>&#42;</span>
				</label>
				<input placeholder="nagulpranav2107@gmail.com" />
			</div>
			<div className="inputContainer">
				<label>
					Course <span>&#42;</span>
				</label>
				<select>
					<option default>-Select a value-</option>
					<option>A</option>
					<option>B</option>
					<option>C</option>
				</select>
			</div>
			<div className="inputContainer">
				<label>
					Start Date <span>&#42;</span>
				</label>
				<input type="date" placeholder="nagulpranav2107@gmail.com" />
			</div>
			<div className="inputContainer">
				<label>
					End Date <span>&#42;</span>
				</label>
				<input type="date" placeholder="nagulpranav2107@gmail.com" />
			</div>
			<div className="inputContainer">
				<label>
					Total Amount <span>&#42;</span>
				</label>
				<input placeholder="" />
			</div>
			<div className="inputContainer">
				<label>
					Member Amount <span>&#42;</span>
				</label>
				<input placeholder="" />
			</div>
			<div className="inputContainer">
				<label>
					Running Week Day Name <span>&#42;</span>
				</label>
				<select>
					<option default>-None-</option>
					<option>Sunday</option>
					<option>Monday</option>
					<option>Tuesday</option>
					<option>wednesday</option>
					<option>Thursday</option>
					<option>Friday</option>
					<option>Saturday</option>
				</select>
			</div>
			<div className="inputContainer">
				<label>
					Batch CRM <span>&#42;</span>
				</label>
				<select>
					<option default>-None-</option>
					<option>1</option>
				</select>
			</div>
			<div className="inputContainer">
				<label>
					Company Billing <span>&#42;</span>
				</label>
				<select>
					<option default>-None-</option>
					<option>1</option>
				</select>
			</div>
			<div className="inputContainer">
				<label>
					Payment Option Show <span>&#42;</span>
				</label>
				<input placeholder="Yes" />
			</div>
			<button>Next</button>
		</div>
	);
};

export default FormMaster;
