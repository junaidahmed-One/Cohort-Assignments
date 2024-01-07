import { useState } from "react";
import { Card } from "./Card";

export function CreateCard() {
	const [card, setCard] = useState([]);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [interest, setInterest] = useState("");
	const [links, setLinks] = useState("");

	return (
		<div>
			<input
				type="text"
				placeholder="Enter name"
				onChange={function (e) {
					setName(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter description"
				onChange={function (e) {
					setDescription(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter interest"
				onChange={function (e) {
					setInterest(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Enter link"
				onChange={function (e) {
					setLinks(e.target.value);
				}}
			/>
			<br></br>

			<button
				onClick={() => {
					setCard([
						...card,
						{
							name: name,
							description: description,
							interest: interest,
							links: links,
						},
					]);
				}}
			>
				Create Card
			</button>
			<br />

			{card.map((c) => {
				return (
					<>
						<Card card={c}></Card>
					</>
				);
			})}
		</div>
	);
}
