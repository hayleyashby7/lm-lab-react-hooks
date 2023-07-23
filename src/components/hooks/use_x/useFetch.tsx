import { useState, useEffect } from 'react';
import { isError } from '../../../helpers/is_error';

function useFetch<Type>(url: string): Type {
	const [data, setData] = useState(null);
	const [isFetching, setIsFetching] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				setIsFetching(false);
				if (response.status === 200) {
					setData(await response.json());
				}
			} catch (error) {
				setIsFetching(false);
				console.log(isError(error) ? error.message : 'Unknown error!');
			}
		};
		fetchData();
	}, [url]);

	return { isFetching, data } as Type;
}

export default useFetch;
