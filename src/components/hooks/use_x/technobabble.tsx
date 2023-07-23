import useFetch from './useFetch';

/** This is the response that techy-api gives*/
interface TechnoBabble {
	message: string;
}

interface TechnoBabbleType {
	isFetching: boolean;
	data: TechnoBabble | null;
}

export const TechnoBabble = () => {
	const url = 'https://techy-api.vercel.app/api/json';

	const { isFetching, data } = useFetch<TechnoBabbleType>(url);

	return (
		<>
			<h2>Custom Hook - totally legit technical update</h2>

			{isFetching ? <p>Fetching...</p> : <p>{data?.message}</p>}
		</>
	);
};

export default TechnoBabble;
