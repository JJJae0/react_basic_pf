//  1. 해당 유튜브 페이지에 대해서 설명, 이슈사항은 없었는지

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

//  1. 해당 유튜브 페이지에 대해서 설명, 이슈사항은 없었는지
/*
	해당페이지는 유튜브 api 를 활용해서 비동기데이터, 서버사이드 데이터를 활용하는 페이지
	유튜브 데이터는 유튜브 컴포넌트에서만 호출하는 것이 아닌 메인페이지의 비주얼 컴포넌트에도 호출해야 되는 이슈가 발생
	처음에는 단순하게 fetching 함수를 똑같이 호출해서 구현하려고 했었는데, 같은 함수를 두 번 호출하는 게 코드의 가독성이 떨어질 거 같다고 판단하여 구글링으로 redux 라는 전역 상태관리 라이브러리를 검색해서 redux-sage 방식을 알 수 있었는데
	redux-sage 는 너무 동작방식이 중앙집중적이고 간단한 비동기 데이터를 전역관리하기엔 코드의 복잡도가 커서 
	비효율적으로 느껴졌습니다 그 대안으로 redux-toolkit 를 활용했습니다
	비동기데이터의 상태에 따라서 자동으로 액션 객체를 생성해주고 액션객체의 상태에 따라서 리듀서 알아서 전역데이터를 변경해주는 방식이 효율적으로 느껴져서 적용을 해봤다
	리덕스 툴킷을 활용함으로써 컴포넌트 안 쪽에서 비동기 데이터 함수를 관리하는 게 아닌 컴포넌트 외부의 slice 파일을 통해서 컴포넌트 외부에서 비동기데이터별로 fetching 함수와 리듀서 함수를 한 번에 관리할 수 있는 부분이 편하게 느껴졌습니다
*/
