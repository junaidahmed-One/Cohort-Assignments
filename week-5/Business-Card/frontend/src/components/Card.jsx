/* eslint-disable react/prop-types */
export function Card(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h4>{props.description}</h4>
			<ul>{props.interests}</ul>
			<a href={props.linkedin}>LinkedIn</a>
			<a href={props.twitter}>Twiiter(X)</a>
		</div>
	);
}
