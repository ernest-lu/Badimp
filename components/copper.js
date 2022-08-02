import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Copper({id}) {
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