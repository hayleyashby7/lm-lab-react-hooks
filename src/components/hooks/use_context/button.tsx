import { useThemeContext } from './useThemeContext';

interface ButtonProps {
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
	const { toggleTheme } = useThemeContext();

	return <button onClick={toggleTheme}>{title}</button>;
};
