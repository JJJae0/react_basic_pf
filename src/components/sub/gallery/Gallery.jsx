import Modal from '../../common/modal/Modal';
import './Gallery.scss';
import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-component';

export default function Gallery() {
	const refInput = useRef(null);
	const refBtnSet = useRef(null);
	const [Pics, setPics] = useState([]);
	const [ActiveURL, setActiveURL] = useState('');
	const [IsUser, setIsUser] = useState(true);
	const [IsModal, setIsModal] = useState(false);
	const my_id = '199347294@N08';

	//처음 마운트 데이터 호출 함수
	const fetchData = async (opt) => {
		let url = '';
		const api_key = '96ddb1e402c9b1e2d2088753c5a225ca';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const num = 4;

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&per_page=${num}&nojsoncallback=1&format=json`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${api_key}&per_page=${num}&nojsoncallback=1&format=json&user_id=${opt.id}`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${api_key}&per_page=${num}&nojsoncallback=1&format=json&tags=${opt.tags}`;
		}

		const data = await fetch(url);
		const json = await data.json();

		if (json.photos.photo.length === 0) {
			return alert('해당 검색어의 결과값이 없습니다.');
		}
		setPics(json.photos.photo);
	};

	//submit이벤트 발생시 실행할 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsUser(false);

		const btns = refBtnSet.current.querySelectorAll('button');
		btns.forEach((btn) => btn.classList.remove('on'));

		if (refInput.current.value.trim() === '') {
			return alert('검색어를 입력하세요.');
		}

		fetchData({ type: 'search', tags: refInput.current.value });
		refInput.current.value = '';
	};

	//myGallery 클릭 이벤트 발생시 실행할 함수
	const handleClickMy = (e) => {
		setIsUser(true);
		if (e.target.classList.contains('on')) return;

		const btns = refBtnSet.current.querySelectorAll('button');
		btns.forEach((btn) => btn.classList.remove('on'));
		e.target.classList.add('on');

		fetchData({ type: 'user', id: my_id });
	};

	//Interest Gallery 클릭 이벤트 발생시 실행할 함수
	const handleClickInterest = (e) => {
		setIsUser(false);
		if (e.target.classList.contains('on')) return;

		const btns = refBtnSet.current.querySelectorAll('button');
		btns.forEach((btn) => btn.classList.remove('on'));
		e.target.classList.add('on');

		fetchData({ type: 'interest' });
	};

	//profile 아이디 클릭시 실행할 함수
	const handleClickProfile = (e) => {
		if (IsUser) return;
		fetchData({ type: 'user', id: e.target.innerText });
		setIsUser(true);
	};

	useEffect(() => {
		fetchData({ type: 'user', id: my_id });
	}, []);
	return (
		<>
			<div className='Box'>
				<div className='Box1'>
					<div className='subBox1'></div>
					<p className='subTitle1'>REST</p>
					<div className='Line1'></div>
					<div className='Gradation1'></div>
				</div>
				<div className='Box2'>
					<div className='subBox2'></div>
					<p className='subTitle2'>MENU SPACE</p>
					<div className='Line2'></div>
					<div className='Gradation2'></div>
				</div>
				<div className='Box3'>
					<div className='subBox3'></div>
					<p className='subTitle3'>EAVE SOFA</p>
					<div className='Line3'></div>
					<div className='Gradation3'></div>
				</div>
				<div className='Box4'>
					<div className='subBox4'></div>
					<p className='subTitle4'>PH HOUSE</p>
					<div className='Line4'></div>
					<div className='Gradation4'></div>
				</div>
				<div className='searchBox'>
					<div>
						<p>Gallery</p>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							ref={refInput}
							type='text'
							placeholder='검색어를 입력하세요'
						/>
						<button>검색</button>
					</form>
				</div>
				<div className='btnSet' ref={refBtnSet}>
					<button className='on' onClick={handleClickMy}>
						My Gallery
					</button>

					<button onClick={handleClickInterest}>Interest Gallery</button>
				</div>
				<div className='picFrame'>
					<Masonry
						elementType={'div'}
						options={{ transitionDuration: '0.5s' }}
						disableImagesLoaded={false}
						updateOnEachImageLoad={false}
					>
						{Pics.map((data, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<img
											className='pic'
											src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`}
											alt={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}
											onClick={(e) => {
												setActiveURL(e.target.getAttribute('alt'));
												setIsModal(true);
											}}
										/>
										<h2>{data.title}</h2>

										<div className='profile'>
											<img
												className='Mainimg'
												src={`http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg`}
												alt={data.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
										</div>
										<span onClick={handleClickProfile}>{data.owner}</span>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</div>

			{IsModal && (
				<Modal setIsModal={setIsModal}>
					<img src={ActiveURL} alt='img' />
				</Modal>
			)}
		</>
	);
}
