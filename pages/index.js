import HomeCard from "../components/homeCard.js";
import SearchBar from "../components/searchBar.js";
import {useState, useEffect} from 'react';
import ParseId from '../Helpers.js';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Footer from "../components/footer.js";

const Index = (props) => {
	const [plates, setPlates] = useState([]);
	const [searchPlates, setSearchPlates] = useState([]);

	const jsonLoc = "https://raw.githubusercontent.com/ernest-lu/TEM-PLATES/main/mein.json";
	
	useEffect(() => {
		const fetchData = async () => await fetch(jsonLoc).then(res => res.json()).then(j => setPlates(j));
		fetchData().catch(console.error);
	}, []);

	useEffect(() => {
		setSearchPlates(plates);
	}, [plates]);
	
	var meins = {
		"Costa Hyza" : "costa rica",
		"SWE 9345alb" : "swe intern",
		"oumani bert() { return 0; }" : "int main() { return 0; }",
		"I drive a mclalbert" : "i drive a mclaren",
		"Yodaniel top jacked" : "yorick top main",
		"Slim Hyz snack" : "slim jim snack",
		"Bert has bert driver's license" : "bert has his driver's license",
		"rick hyz dan noodles" : "dan dan mein noodles",
		"Mert Mouse clubhouse" : "mickey mouse clubhouse",
		"dlz9345 has int in bert name" : "meintgl has int in his name"
	};
	const [mein, setMein] = useState("");
	useEffect(() => {
		var index = (Date.now() + getRandomInt()) % Object.keys(meins).length;
		setMein(Object.keys(meins)[index]);
	}, []);

	const searchChange = (prefix) => {
		if (prefix === "") {
			setSearchPlates(plates);
			return;
		}
		const newPlates = plates.filter(
			(plate) => (plate.id.indexOf(prefix) !== -1)
		);
		setSearchPlates(newPlates);

		if (prefix.toLowerCase() === meins[mein]) {
			setGenius("YOU ARE A GENIUS !!!")
		} else {
			setGenius("");
		}
	};

	const refreshMein = (prefix) => {
		if (prefix.toLowerCase() === meins[mein]) {
			setGenius("YOU ARE A GENIUS !!!")
		} else {
			setGenius("");
		}

		var newMein = mein;
		while (newMein === mein) {
			newMein = Object.keys(meins)[(Date.now() + getRandomInt()) % Object.keys(meins).length];
		}

		setMein(newMein);
	};

	const [genius, setGenius] = useState("");
 
	return (
		<Container maxWidth="sm"> 
			<h1>Badimp</h1>
			<SearchBar
				funky={searchChange}
				placeholder={mein}
				refreshFunction={refreshMein}
			/>
			<List>{
				searchPlates
					.map((plate) => 
						<HomeCard name={ParseId(plate.id)} id={plate.id} key={plate.id}/>)
			}</List>
			<h2>
				{genius}
			</h2>

			<Footer>

			</Footer>
		</Container>
	);
};

Index.displayName = "Badimp";
export default Index;

function getRandomInt() {
	return Math.floor(Math.random() * 34);
}