/*
	1. csr 방식에 대해서 설명하시오
	2. ssr 방식에 비해 csr 방식의 장점과 단점에 대해서 설명
	3. react 프로젝트에서 public, src 폴더를 통해서 어떤식으로 빌드가 되고, 화면이 어떻게 렌더링 되는가
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from './redux/youtubeSlice';
import flickrReducer from './redux/flickrSlice';
import modalReducer from './redux/modalSlice';
import menuReducer from './redux/menuSlice';

const store = configureStore({
	reducer: {
		youtube: youtubeReducer,
		flickr: flickrReducer,
		modal: modalReducer,
		menu: menuReducer,
	},
});

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

/*
	1. csr 방식에 대해서 설명하시오
		- Client Side Rendering vs (Server Side Rendering)
		- 예전 SSR 방식은 각 페이지마다 html 파일을 직접 만들어놓은 뒤 사용자가 url 입력 시 직접
		서버에서 각각의 HTML 파일을 불러와서 렌더링하는 방식
		- 사용자가 브라우저에 url 입력해서 페이지 요청하면 빈 html 파일만 서버쪽에서 가져오고 그와동시에 
		JSX 를 반환하는 리액트 컴포넌트를 파일을 같이 불러옴
		- 리액트 컴포넌트가 모두 동작되면 빈 HTML 문서에 동적으로 모든 컴포넌트가 렌더링됨
		- 초기 모든 서브페이지에 대한 파일들을 모두 가져와서 url 요청에 따라서 미리 가져온 리액트 컴포넌트를 바꾸면서 화면을 변경


	2. ssr 방식에 비해 csr 방식의 장점과 단점에 대해서 설명
		- 초기로딩속도가 SSR 방식에 비해서는 오래 걸림
		- 처음에 빈 HTML 파일을 가져오고 모든 리액트 컴포넌트가 마운트되기 전까지 사용자는 빈화면을
		봐야함 -> 검색엔진에 안 좋음
		- 해결방법 (Next.js 라는 framework 을 이용해서 SSR, CSR 방식이 결합된 hydration 을 활용) = 더 깊이 공부할 예정입니다
		- 해결방식 index.html 을 불러오고 동적인 react 리액트 컴포넌트 마운트되기 전까지 static 데이터를 미리 출력해서 검색엔진 최적화


	3. react 프로젝트에서 public, src 폴더를 통해서 어떤식으로 빌드가 되고, 화면이 어떻게 렌더링 되는가
		- index.js 를 구동파일로 해서 App.js 모든 컴포넌트를 불러온 뒤, 내부적으로 내장되어 있는 webpack 이라는 번들러에 의해서 하나의 
		js 파일로 번들링되고 번들링된 파일이 index.js 에 의해서 pubilc 폴더 안쪽에 있는 index.html 에 합치면서 최종 빌드가 완료된
		- 그럼 브라우저에서는 빌드완료된 index.html 을 읽어서 화면 렌더링 
*/

/*
	redux-toolkit 으로 클라이언트, 서버 데이터 구분없이 전역상태관리의 문제점
	- 기존에는 서버사이드 데이터로 전역 store 에 static 하게 저장을 하다보니 실시간으로 자주 바뀌는 데이터 경우에는 
	결국 전역 store 에 최신데이터가 아닌 예전 데이터를 관리하게 됨
	서버 데이터를 전역에 저장하는 것 자체가 잘못된 방식이기 때문에
	서버 데이터가 필요할 떄마다 계속 가져와야됨
	새로 fetching 을 할 때 이미 불러온 적이 있는 똑같은 데이터 경우는 caching 처리된 데이터를 재활용해서 불필요한 refetching 방지

	비동기 데이터가 아닌 클라이언트 데이터도 굳이 redux 가 아닌 context api 를 활용하는 이유
	- 복잡한 구조의 비동기 데이터는 react-query 가 어차피 처리하기 때문에 
	- 간단한 클라이언트 사이드 데이터를 굳이 리덕스라는 라이브러리를 쓰면서까지 활용한 필요한 필요가 없고 
	- 기존 리액트의 기능인 useContext 를 활용한 커스텀훅을 활용

	client-side-data (useContext 를 활용한 커스텀훅을 전역관리)
	server-side-data (react-query 를 활용해서 전역상태로 저장하는 것이 아닌 캐싱처리)
*/
