interface ButtonProps {
	toggle: () => void;
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ toggle, title }) => {
	return <button onClick={toggle}>{title}</button>;
};
