import { useState } from 'react';

export function CountCats() {
	const [countCats, setCountCats] = useState(1);
	const [cats, setCats] = useState(['🐈 ']);

	const handleClick = () => {
		setCountCats(countCats + 1);
		cats.push('🐈 ');
	};

	return (
		<>
			<h2>useState</h2>

			<p>{cats}</p>

			<button onClick={handleClick}>There are {countCats} cats 🐈 </button>
		</>
	);
}
