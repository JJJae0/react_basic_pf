import './Visual.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useYoutubeQuery } from '../../../hooks/useYoutbe';

function Visual() {
	const [Index, setIndex] = useState(0);
	const { data, isSuccess } = useYoutubeQuery();

	/*
		data: react-query 가 반환한 데이터
		isError: 데이터 응답 실패 시 true,
		isSucess: 데이터 응답 성공 시 true,
		isLoading: 데이터 요청 pending 상태일 때 true
		isRefetching: true 동일한 데이터라도 다시 refeching 처리 유무 (기본값 false)
	*/

	return (
		<section className='visual'>
			<div className='titBox'>
				<ul>
					{isSuccess &&
						data.map((tit, idx) => {
							if (idx >= 5) return null;
							return (
								<li key={idx} children className={idx === Index ? 'on' : ''}>
									<h3>{tit.snippet.title}</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									</p>

									<button>
										<Link to={`/detail/${tit.id}`}>View</Link>
									</button>
								</li>
							);
						})}
				</ul>
			</div>
			<Swiper
				slidesPerView={3}
				spaceBetween={50}
				loop={true}
				centeredSlides={true}
				onSlideChange={(el) => setIndex(el.realIndex)}
				breakpoints={{
					// 1000px 보다 브라우저 폭이 커졌을 때
					1000: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
			>
				{isSuccess &&
					data.map((vid, idx) => {
						if (idx >= 5) return null;
						return (
							<SwiperSlide key={idx}>
								<div className='pic'>
									<img
										src={vid.snippet.thumbnails.maxres.url}
										alt={vid.title}
									/>
									<img
										src={vid.snippet.thumbnails.maxres.url}
										alt={vid.title}
									/>
								</div>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</section>
	);
}

export default Visual;
