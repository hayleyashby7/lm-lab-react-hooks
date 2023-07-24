import { useThemeContext } from './useThemeContext';

export const Child: React.FC<{ title: string }> = ({ title }) => {
	const { theme } = useThemeContext();

	const themeStyle = {
		backgroundColor: theme ? '#333' : '#CCC',
		color: theme ? 'white' : '#333',
		padding: '2rem',
		margin: '2rem',
	};

	return <div style={themeStyle}>{title}</div>;
};
