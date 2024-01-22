import { useState } from "react";

export function ColorDisplay() {
	const [bgColor, setBgColor] = useState("bg-black");

	function changeColor(color) {
		setBgColor(color);
		console.log("change color hit");
	}
	return (
		<>
			<div
				className={`${bgColor} absolute inset-0 h-15 flex justify-center bg-white shadow-lg rounded-lg p-5 m-5`}
			></div>
			<div className="absolute inset-x-0 bottom-0 h-16 flex justify-around bg-indigo-100 shadow-lg rounded-full px-10 m-20 place-items-center">
				<button
					className="bg-red-500 shadow-lg shadow-red-500/50 rounded-md p-2 m-2"
					onClick={() => changeColor("bg-red-200")}
				>
					Red
				</button>
				<button
					className="bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-md p-2 m-2"
					onClick={() => changeColor("bg-yellow-200")}
				>
					Yellow
				</button>
				<button
					className="bg-green-500 shadow-lg shadow-green-500/50 rounded-md p-2 m-2"
					onClick={() => changeColor("bg-green-200")}
				>
					Green
				</button>
				<button
					className="bg-black shadow-lg shadow-black-500/50 rounded-md p-2 m-2 text-white"
					onClick={() => changeColor("bg-black")}
				>
					Black
				</button>
				<button
					className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md p-2 m-2"
					onClick={() => changeColor("bg-white")}
				>
					Default
				</button>
			</div>
		</>
	);
}
