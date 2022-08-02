import { useRouter } from 'next/router';
import Link from 'next/Link';
import { CopyBlock, nord } from "react-code-blocks";
import { useEffect, useState } from 'react';

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
		<div>
			<p>Plate: {id}</p>
			<CopyBlock
				language={"cpp"}
				text={raw}
				showLineNumber={true}
				theme={nord}
				wrapLines={true}
				codeBlock
			/>

			<Link href="/">
				<button>
				back
				</button>
			</Link>
		</div>
  	);
}

export default Plate
