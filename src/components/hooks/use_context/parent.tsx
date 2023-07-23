import { createContext, useState } from 'react';
import { Child } from './child';
import { Button } from './button';

export const ThemeContext = createContext(true);

export const Parent = () => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	};

	return (
		<div className='section'>
			<h2>useContext</h2>
			<Button toggle={toggleTheme} title='Toggle Theme' />
			<ThemeContext.Provider value={darkTheme}>
				<Child title='Child 1' />
				<Child title='Child 2' />
			</ThemeContext.Provider>
		</div>
	);
};
