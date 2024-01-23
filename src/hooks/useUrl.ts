import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const useUrl = () => {
	const getShortUrl = useCallback(async (url: string) => {
		try {
			const response = await axios.post(`/api/url`, { url });
			return response.data;
		} catch (error: any) {
			return error;
		}
	}, []);

	return {
		getShortUrl,
	};
};

export default useUrl;
