import useFetch from './useFetch';

/** This is the response that TypiCode gives for the /posts/ endpoint */
interface PostResponse {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostResponseType {
	isFetching: boolean;
	data: PostResponse | null;
}

export const Post = () => {
	const url = 'https://jsonplaceholder.typicode.com/posts/1';

	const { isFetching, data } = useFetch<PostResponseType>(url);

	return (
		<>
			<h2>Custom Hook - fetching Posts</h2>

			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>
	);
};

export default Post;
