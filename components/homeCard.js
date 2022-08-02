import Link from 'next/link';
import Copper from './copper.js'
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

const HomeCard = ({name, id}) => {
	return (
        <div>
			<ListItem secondaryAction={<Copper id={id}/>} key={id}>
				<Link href={"/plates/" + id}>	
					<ListItemButton>
						{name}
					</ListItemButton>
				</Link>
			</ListItem>
        </div>
      );
};   

export default HomeCard;