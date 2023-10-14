import './Youtube.scss';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Youtube() {
	return (
		<>
			<div className='Main'>
				<div className='layoutBox'>
					<div className='Title'>
						<p className='title'>Youtube Playlist </p>
						<p className='title3'>
							𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, <br />
							𝐇𝐨𝐧𝐧𝐞,𝐇𝐨𝐧𝐧𝐞, <br />
							𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, <br />
							𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, <br />
							𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡
						</p>
						<p className='title2'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
							Temporibus, suscipit. Animi explicabo necessitatibus odit?
							<br />
							Beatae quod, suscipit cumque labore doloribus
						</p>
					</div>
					<div className='MainBox'>
						<div className='box1'></div>
						<div className='box2'></div>
						<div className='box3'></div>
						<div className='box4'></div>
					</div>
				</div>
			</div>
		</>
	);
	// const [Youtube, setYoutube] = useState([]);
	//async await로 동기화 코드를 좀더 깔끔하게 정리
	// const fetchYoutube = async () => {
	// 	const api_key = 'AIzaSyDahiuuGjqriZa9DGdl1wIGj_Qi7FmApCE';
	// 	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	// 	const pid = 'PLzWf7Qld-pIvOABZiY6uudaX3a3A61wgB';
	// 	const num = 5;
	// 	const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
	// 	const data = await fetch(resultURL);
	// 	const json = await data.json();
	// 	console.log(json.items);
	// 	setYoutube(json.items);
	// };
	// useEffect(() => {
	// 	fetchYoutube();
	// }, []);
	// return (
	// 	<>
	// 		<div className='maintitle'>
	// 			<p className='title'>Youtube</p>
	// 		</div>
	// 		<div className='background'></div>
	// 		{Youtube.map((data, idx) => {
	// 			let tit = data.snippet.title;
	// 			let desc = data.snippet.description;
	// 			let date = data.snippet.publishedAt;
	// 			return (
	// 				<article key={idx}>
	// 					<div className='titBox'>
	// 						<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
	// 					</div>
	// 					<div className='conBox'>
	// 						<p>{desc.length > 180 ? desc.substr(0, 180) + '...' : desc}</p>
	// 						<span>{date.split('T')[0].split('-').join('.')}</span>
	// 					</div>
	// 					<div className='picBox'>
	// 						{/* 썸네일 링크 클릭시 특정유튜브 객체 하나의 정보값을 받기 위해서 유튜브 객체의 id값을 params로 전달 */}
	// 						<Link to={`/detail/${data.id}`}>
	// 							<img
	// 								src={data.snippet.thumbnails.standard.url}
	// 								alt={data.title}
	// 							/>
	// 						</Link>
	// 					</div>
	// 				</article>
	// 			);
	// 		})}
	// </>
	// );
}

/*
	리액트는 단방향 데이터 바인딩
	- 부모에서 자식으로 데이터 전달가능하지만 자식에서 부모로는 데이터를 전달 불가
	- props전달, children 전달
	
	리액트에서 자식 컴포넌트에서는 직접적으로 부모 컴포넌트의 state값 변경이 불가
	- 해결방법 부모의 state변경함수를 자식 컴포넌트로 전달
	- 자식컴포넌트에서는 전달받은 state변경함수로 간접적으로 부모 state값 변경가능	

	promsie .then구문을 좀더 구조적으로 짜는 방법 (async await) -> then구문을 쓸 필요가 없어짐
	async await 사용조건
	- promise반환함수를 wrapping처리
	- wrapping된 함수에 async 적용
	- promise반환함수 앞쪽에 await 적용
	- await 적용되어 있는 다음 코드가 무조건 동기화 처리
*/

/* {IsModal && (
				<Modal setIsModal={setIsModal}>
					<iframe
						src={`https://www.youtube.com/embed/${Youtube[Index].snippet.resourceId.videoId}`}
						title='youtube'
					></iframe>
				</Modal>
			)} */
