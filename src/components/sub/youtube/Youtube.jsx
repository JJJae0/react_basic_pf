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
						return (
							<article key={idx}>
								<div className='picBox'>
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
