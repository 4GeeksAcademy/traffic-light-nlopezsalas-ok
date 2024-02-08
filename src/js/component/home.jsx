//--------------- 01 - SOLUCIÓN 1 ------------------//

// import React, { useState } from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {
// 	const [selectedRed, setSelectRed] = useState("");
// 	const [selectedYellow, setSelecYellow] = useState("");
// 	const [selectedGreen, setSelectGreen] = useState("");

// 	function clickTrafficLight (color) {
// 		(color==="bg-danger") ? setSelectRed("selected") : setSelectRed("");
// 		(color==="bg-warning") ? setSelecYellow("selected") : setSelecYellow("");
// 		(color==="bg-success") ? setSelectGreen("selected") : setSelectGreen("");
// 	}
// 	return (
// 		<>
// 			<div className="stroke bg-dark"></div>
// 			<div className="traffic-light">
// 				<div className={ "light rounded-circle bg-danger " + selectedRed } onClick={function(){clickTrafficLight("bg-danger")}}></div>
// 				<div className={ "light rounded-circle bg-warning " + selectedYellow }  onClick={function(){clickTrafficLight("bg-warning")}}></div>
// 				<div className={ "light rounded-circle bg-success " + selectedGreen }  onClick={function(){clickTrafficLight("bg-success")}}></div>
// 			</div>
// 		</>			
// 	);
// };

// export default Home;

//--------------- 02 - SOLUCIÓN 2 ------------------//


// import React, { useState } from "react";

// const Home = () => {
//     const colors = {
//         "bg-danger": "Red",
//         "bg-warning": "Yellow",
//         "bg-success": "Green"
//     };

// 	const [selectedColor, setSelectedColor] = useState(null);

//     const clickTrafficLight = (color) => {
//         setSelectedColor(color);
//     };

//     return (
//         <>
//             <div className="stroke bg-dark"></div>
//             <div className="traffic-light">
//                 {Object.keys(colors).map((colorClass) => (
//                     <div
//                         key={colorClass}
//                         className={`light rounded-circle ${colorClass} ${selectedColor === colorClass ? "selected" : ""}`}
//                         onClick={() => clickTrafficLight(colorClass)}
//                     ></div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;


//03 --------- SOLUCIÓN -------------- // 

import React, { useState } from "react";

const Home = () => {
	const [currentColor, setCurrentColor] = useState(null);
	const [visibleColor, setVisibleColor] = useState(true);

	const handleTrafficLightClick = (color) => {
		setCurrentColor(color);
	};

	function selectedTrafficLight() {
		switch (currentColor) {
			case null:
				setCurrentColor("bg-danger");
				break;
			case "bg-danger":
				setCurrentColor("bg-warning");
				break;
			case "bg-warning":
				setCurrentColor("bg-success");
				break;
			case "bg-success":
				if(visibleColor) {
					setCurrentColor("bg-danger");
					break;
				} else {
					setCurrentColor("bg-info");
					break;
				}
			case "bg-info":
				setCurrentColor("bg-danger");
				break;
			default:
				setCurrentColor(null);
				break;
		}
	};

	function showPurpleLight() {
		setVisibleColor(!visibleColor);

	};


	return (
		<>
			<div className="stroke bg-dark"></div>
			<div className="traffic-light">
				<div
					className={`light rounded-circle bg-danger ${currentColor === "bg-danger" ? "selected" : ""}`}
					onClick={() => handleTrafficLightClick("bg-danger")}
				></div>
				<div
					className={`light rounded-circle bg-warning ${currentColor === "bg-warning" ? "selected" : ""}`}
					onClick={() => handleTrafficLightClick("bg-warning")}
				></div>
				<div
					className={`light rounded-circle bg-success ${currentColor === "bg-success" ? "selected" : ""}`}
					onClick={() => handleTrafficLightClick("bg-success")}
				></div>
				<div
					className={`light rounded-circle bg-info ${currentColor === "bg-info" ? "selected" : ""}`}
					onClick={() => handleTrafficLightClick("bg-info")}
					style={{ display: visibleColor ? "none" : "block" }}
				></div>

			</div>

			{/* BONUS 1: Crea un botón que, al hacer clic en él, alterna el color seleccionado del semáforo entre rojo, verde y amarillo. */}
			<div><button className="btn btn-primary mt-5" onClick={selectedTrafficLight}>Selected</button></div>

			{/* BONUS 2: Tener un botón que al hacer clic en él anuncie un color extra "púrpura" al semáforo. */}
			<div><button className="btn btn-primary mt-1" onClick={showPurpleLight}>Show purple</button></div>

		</>
	);
};

export default Home;
