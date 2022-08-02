import { useRouter } from 'next/router';
import Link from 'next/Link';
import { CodeBlock, dracula } from "react-code-blocks";
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
			<button>
                {"Copy"}
            </button>
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
		<div>
			<p>Plate: {id}</p>
			<Link href="/">
				<button>
				back
				</button>
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
		</div>
  	);
}

export default Plate;
