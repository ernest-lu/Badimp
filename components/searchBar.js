import {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';

const SearchBar = ({funky, placeholder}) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		funky(query)
	}, [query]);

    return (
		<TextField 
			label={placeholder}
			value={query}
			onChange={(event) => setQuery(event.target.value)}
			size={"large"} 
			variant={"outlined"}
			margin={"dense"}
			fullWidth={true}
		/>
    );
};   

export default SearchBar;