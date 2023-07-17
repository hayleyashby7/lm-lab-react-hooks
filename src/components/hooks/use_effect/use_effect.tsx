// make an api call using useEffect

import { useEffect, useState } from 'react';

interface Todo {
	completed: boolean;
	title: string;
	id: number;
	userId: number;
}
export const APICall = () => {
	const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
	const [todo, setTodo] = useState<Todo | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setTodo(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [url]);

	return (
		<>
			<h2>useEffect</h2>
			{todo && (
				<div>
					<h2>{todo.title}</h2>
					<p>Completed: {todo.completed.toString()}</p>
				</div>
			)}
		</>
	);
};
