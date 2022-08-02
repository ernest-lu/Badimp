import HomeCard from "../components/homeCard.js";
import SearchBar from "../components/searchBar.js";
import {useState, useEffect} from 'react';
import ParseId from '../Helpers.js';
import List from '@mui/material/List';
import Container from '@mui/material/Container';

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
		<Container maxWidth="sm"> <h1>badimp</h1>
			<SearchBar
				funky={searchChange}
				placeholder={"Hi me"}
			/>
			<List>{
				searchPlates
					.map((plate) => 
						<HomeCard name={ParseId(plate.id)} id={plate.id} key={plate.id}/>)
			}</List>
		</Container>
	);
};

Index.displayName = "Badimp";
export default Index;
