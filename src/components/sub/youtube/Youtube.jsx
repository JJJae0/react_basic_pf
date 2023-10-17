import './Youtube.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Youtube() {
	const Youtube = useSelector((store) => store.youtube.data);

	return (
		<>
			<div className='Youtube'>
				<div className='Main'>
					<div className='layoutBox'>
						<div className='Line'></div>
						<div className='Title'>
							<p className='title'>essential;</p>
							<p className='title2'>
								Lorem ipsum dolor sit amet consectetur, <br />
								adipisicing elit. Aut ex maiores eligendi fugiat, <br />
								natus distinctio dolore consequuntur, <br />
								adipisci nulla iste.
							</p>
							<div className='Button'>
								<button className='button1'>{`<`}</button>
								<button className='button2'>{`>`}</button>
							</div>
						</div>
					</div>
				</div>
				<div className='Youtubeapi'>
					{Youtube.map((data, idx) => {
						// let tit = data.snippet.title;
						// let desc = data.snippet.description;
						// let date = data.snippet.publishedAt;
						return (
							<article key={idx}>
								{/* <div className='titBox'>
									<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
								</div> */}

								{/* <div className='conBox'>
									<p>{desc.length > 180 ? desc.substr(0, 180) + '...' : desc}</p>
									<span>{date.split('T')[0].split('-').join('.')}</span>
								</div> */}

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
				</div>
			</div>
		</>
	);
}
