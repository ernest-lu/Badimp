import { useRouter } from 'next/router';
import Link from 'next/link';
import { CodeBlock, dracula } from "react-code-blocks";
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';	
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ParseId from '../../../Helpers.js';


//had to copy because doesnt work for some reason with dynamik
function Copper({id}) {
	const url = "https://raw.githubusercontent.com/ernest-lu/TEM-PLATES/main/";
	const fileLocation = url + id + ".badimp"; 
	const [text, setText] = useState("");
	useEffect(() => {
		const fetchData = async () => await fetch(fileLocation)
			.then(res => res.text())
			.then(resText => setText(resText));
		fetchData().catch(console.error);
	}, []);

      return (
        <CopyToClipboard text={text}>
			<IconButton edge="end" aria-label="copy">
                <ContentCopyIcon />
            </IconButton>
		</CopyToClipboard>
      );
}

const Plate = () => {
	const router = useRouter();
	const { id } = router.query;
	const url = "https://raw.githubusercontent.com/ernest-lu/TEM-PLATES/main/";
	const fileLocation = url + id + ".badimp"; 

	const [raw, setRaw] = useState('');
	useEffect(() => {
		fetch(fileLocation).then((res) => {
			var text = "FILE NOT FOUND";
			if (res.ok) {
				text = res.text();
			} 
			return text;
		}).then(text => setRaw(text));
	}, []);

	return (
		<Container maxWidth="md">
			<p>{ParseId(id) + " Plate"}</p>
			<Link href="/">
				<Button variant="contained">
					Back
				</Button>
			</Link>
			<Copper id={id}/>
			<CodeBlock
				language={"cpp"}
				text={raw}
				showLineNumber={true}
				theme={dracula}
				wrapLines={true}
				codeBlock
			/>
		</Container>
  	);
}

export default Plate;
