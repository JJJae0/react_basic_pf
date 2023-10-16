import './Youtube.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Youtube() {
	const [Youtube, setYoutube] = useState([]);

	//async await로 동기화 코드를 좀더 깔끔하게 정리
	const fetchYoutube = async () => {
		const api_key = 'AIzaSyDahiuuGjqriZa9DGdl1wIGj_Qi7FmApCE';
		const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const pid = 'PLzWf7Qld-pIvOABZiY6uudaX3a3A61wgB';
		const num = 4;
		const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
		const data = await fetch(resultURL);
		const json = await data.json();
		console.log(json.items);
		setYoutube(json.items);
	};

	useEffect(() => {
		fetchYoutube();
	}, []);
	return (
		<>
			<div className='Youtubeapi'>
				{Youtube.map((data, idx) => {
					let tit = data.snippet.title;
					let desc = data.snippet.description;
					let date = data.snippet.publishedAt;

					return (
						<article key={idx}>
							<div className='titBox'>
								<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
							</div>

							<div className='conBox'>
								<p>{desc.length > 180 ? desc.substr(0, 180) + '...' : desc}</p>
								<span>{date.split('T')[0].split('-').join('.')}</span>
							</div>

							<div className='picBox'>
								{/* 썸네일 링크 클릭시 특정유튜브 객체 하나의 정보값을 받기 위해서 유튜브 객체의 id값을 params로 전달 */}
								<Link to={`/detail/${data.id}`}>
									<img
										className='Thumbnail'
										src={data.snippet.thumbnails.standard.url}
										alt={data.title}
									/>
								</Link>
							</div>
						</article>
					);
				})}
				<div className='Main'>
					<div className='layoutBox'>
						<div className='Line'></div>
						<div className='Title'>
							<p className='title'>
								The strength <br />
								of our company
							</p>
							<p className='title2'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
								Temporibus, suscipit. Animi explicabo necessitatibus odit?
								<br />
								Beatae quod, suscipit cumque labore doloribus
							</p>
							<div className='Button'>
								<button className='button1'>{`<`}</button>
								<button className='button2'>{`>`}</button>
							</div>
						</div>
						<div className='MainBox'>
							<div className='box1'></div>
							<div className='box2'></div>
							<div className='box3'></div>
							<div className='box4'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
