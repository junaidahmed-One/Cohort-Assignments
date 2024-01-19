export function ProfileCard({ card }) {
	return (
		<div>
			{card.map((c) => {
				return (
					<>
						<h1>{c.name}</h1>
						<h4>{c.location}</h4>
						<p>{c.followers}</p>
						<p>{c.likes}</p>
						<p>{c.photos}</p>
					</>
				);
			})}
		</div>
	);
}
