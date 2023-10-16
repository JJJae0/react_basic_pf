import { useEffect } from 'react';

export const useMedia = () => {
	const getClienWid = () => {
		let wid = 0;
		wid = window.innerWidth;
		if (wid < 1400) return 'laptop';
		if (wid >= 1000) return 'tablet';
		if (wid <= 639) return 'mobile';
	};
	useEffect(() => {
		return window.addEventListener('resize', getClienWid);
	}, []);
};
