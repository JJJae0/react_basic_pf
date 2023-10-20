import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchYoutube = async () => {
	const api_key = 'AIzaSyDahiuuGjqriZa9DGdl1wIGj_Qi7FmApCE';
	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const pid = 'PLzWf7Qld-pIvOABZiY6uudaX3a3A61wgB';
	const num = 4;
	const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

	const { data } = await axios.get(resultURL);
	return data.items;
};

// react-query 에는 쿼리키를 문자열로 지정해서 데이터 호출 시 쿼리키가 동일하면 동일한 데이터로 인지해서
// refetching 처리하지 않고 캐싱되어 있는 데이터를 재활용
// useQuery ([쿼리키], fetching 함수, 캐싱옵션)
// react-query 에서 쓰이는 데이터 상태 개념

// pending : 데이터 요청을 보내고 응답을 받기까지의 상태
// fresh : 작업자가 직접 지정한 데이터의 신선한 상태
// stale : 작업자가 직접 지정한 데이터의 신선하지 못한 (옛날 데이터) 상태
// inactive : 해당 컴포넌트에서 리액트쿼리로 관리하고 있는 데이터를 활용하고 있지 않은 비활성화 상태

export const useYoutubeQuery = () => {
	return useQuery(['youtubeData'], fetchYoutube, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		cacheTime: 1000 * 10,
		staleTime: 1000 * 10,
	});
};
