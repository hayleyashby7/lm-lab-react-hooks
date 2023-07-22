import { useContext } from 'react';
import { ThemeContext } from './parent';

export const Child: React.FC<{ title: string }> = ({ title }) => {
	const dark = useContext(ThemeContext);

	const theme = {
		backgroundColor: dark ? '#333' : '#CCC',
		color: dark ? 'white' : '#333',
		padding: '2rem',
		margin: '2rem',
	};

	return <div style={theme}>{title}</div>;
};
