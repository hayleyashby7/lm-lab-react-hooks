import { createContext, useContext } from 'react';

interface ThemeContextValue {
	theme: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextValue);

export const ThemeContextProvider = ThemeContext.Provider;

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
	const theme = useContext(ThemeContext);
	return theme;
};
