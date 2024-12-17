import "./UserCards.css";

function UsersCard({ imgSrc, name, position, biography }) {
	return (
		<div className="card">
			<img src={imgSrc} alt={name} />
			<div className="card-content">
				<h3>{name}</h3>
				<h4>{position}</h4>
				<p>{biography}</p>
			</div>
		</div>
	);
}

export default UsersCard;
