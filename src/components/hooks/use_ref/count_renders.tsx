import { useState, useRef, useEffect } from 'react';

export const CountRenders = () => {
	const [value, setValue] = useState('');
	const count = useRef<number>(1);

	useEffect(() => {
		count.current++;
	});

	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>

			<p>{value}</p>
			<p>I have rendered {count.current} times</p>
		</>
	);
};
