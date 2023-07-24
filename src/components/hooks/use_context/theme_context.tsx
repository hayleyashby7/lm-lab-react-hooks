import { useState } from 'react';
import { ThemeContextProvider } from './useThemeContext';

interface ThemeContextProps {
	children: React.ReactNode;
}

export const Theme_Context: React.FC<ThemeContextProps> = ({ children}) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	};

	return (
		<ThemeContextProvider
			value={{
				theme: darkTheme,
				toggleTheme: toggleTheme,
			}}
		>
			{children}
		</ThemeContextProvider>
	);
};
