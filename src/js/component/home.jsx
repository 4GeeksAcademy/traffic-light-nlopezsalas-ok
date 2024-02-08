import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedRed, setSelectRed] = useState("");
	const [selectedYellow, setSelecYellow] = useState("");
	const [selectedGreen, setSelectGreen] = useState("");

	function clickTrafficLight (color) {
		(color==="bg-danger") ? setSelectRed("selected") : setSelectRed("");
		(color==="bg-warning") ? setSelecYellow("selected") : setSelecYellow("");
		(color==="bg-success") ? setSelectGreen("selected") : setSelectGreen("");
	}
	return (
		<>
			<div className="stroke bg-dark"></div>
			<div className="traffic-light">
				<div className={ "light rounded-circle bg-danger " + selectedRed } onClick={function(){clickTrafficLight("bg-danger")}}></div>
				<div className={ "light rounded-circle bg-warning " + selectedYellow }  onClick={function(){clickTrafficLight("bg-warning")}}></div>
				<div className={ "light rounded-circle bg-success " + selectedGreen }  onClick={function(){clickTrafficLight("bg-success")}}></div>
			</div>
		</>			
	);
};

export default Home;
