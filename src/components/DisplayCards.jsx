import UsersCards from "./UserCards.jsx";
import "./DisplayCards.css";

function DisplayCards({ chickenTab }) {
	const teacher = chickenTab.filter((user) => user.position === "Teacher");
	const student = chickenTab.filter((user) => user.position === "Student");

	return (
		<div className="display-cards">
			<h2 className="position">Equipe pédagogique</h2>
			<div className="teacher">
				{teacher.map((teacher) => (
					<UsersCards
						chickenTab={teacher.name}
						key={teacher.id}
						imgSrc={teacher.imgSrc}
						name={teacher.name}
						position={teacher.position}
						biography={teacher.biography}
					/>
				))}
			</div>
			<h2 className="position">Camarades</h2>
			<div className="student">
				{student.map((student) => (
					<UsersCards
						chickenTab={student}
						key={student.id}
						imgSrc={student.imgSrc}
						name={student.name}
						position={student.position}
						biography={student.biography}
					/>
				))}
			</div>
		</div>
	);
}

export default DisplayCards;
