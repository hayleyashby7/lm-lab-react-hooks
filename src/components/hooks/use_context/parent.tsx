import { Child } from './child';
import { Button } from './button';
import { Theme_Context } from './theme_context';

export const Parent = () => {
	return (
		<div className='section'>
			<h2>useContext</h2>

			<Theme_Context>
				<Button title='Toggle Theme' />
				<Child title='Child 1' />
				<Child title='Child 2' />
			</Theme_Context>
		</div>
	);
};
