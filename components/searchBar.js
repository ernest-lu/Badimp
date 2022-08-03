import {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import { IconButton } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import CachedIcon from '@mui/icons-material/Cached';

const SearchBar = ({funky, placeholder, refreshFunction}) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		funky(query)
	}, [query]);

    return (
		<div>
			<ListItem>
				<TextField 
					label={placeholder}
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					size={"large"} 
					variant={"outlined"}
					margin={"dense"}
					fullWidth={true}
				/>
				<IconButton
					onClick={() => refreshFunction(placeholder)}>
					<CachedIcon/>
				</IconButton>
			</ListItem>
		</div>
    );
};   

export default SearchBar;
  