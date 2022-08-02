import HomeCard from "../components/homeCard.js";
import SearchBar from "../components/searchBar.js";
import {useState, useEffect} from 'react';
import ParseId from '../Helpers.js';

export default function(props) {
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

	const searchChange = (prefix) => {
		if (prefix === "") {
			setSearchPlates(plates);
			return;
		}
		const newPlates = plates.filter(
			(plate) => (plate.id.indexOf(prefix) !== -1)
		);
		setSearchPlates(newPlates);
	};

	return (
		<div> <h1>badimp</h1>
			<SearchBar
				funky={searchChange}
				placeholder={"Hi me"}
			/>
			<ul>{
				searchPlates.map((plate) => 
					<li key={plate.id}>
						<HomeCard name={ParseId(plate.id)} id={plate.id}/>
					</li>
				)
			}</ul>
		</div>
	);
};
