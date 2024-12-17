import data from "../chickenTab.json";
import DisplayCards from "./components/DisplayCards.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/header.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<DisplayCards chickenTab={data.chickenTab} />
			<Footer />
		</>
	);
}

export default App;
