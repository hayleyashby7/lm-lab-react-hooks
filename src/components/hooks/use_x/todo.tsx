import useFetch from './useFetch';

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

interface TodoResponseType {
	isFetching: boolean;
	data: TodoResponse | null;
}

export const Todo = () => {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';

	const { isFetching, data } = useFetch<TodoResponseType>(url);

	return (
		<>
			<h2>Custom Hook - fetching Todos</h2>

			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>
	);
};

export default Todo;
