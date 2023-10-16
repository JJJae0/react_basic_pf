import Layout from '../../common/layout/Layout';
import './Members.scss';
import { useState } from 'react';

export default function Members() {
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
	};
	const [Val, setVal] = useState(initVal);

	const handleChange = (e) => {
		const { name, value } = e.target;
		// 현재 onCHange 이벤트가 발생하고 있는 form 요소의 name 값을 객체 안에서 변수로 가져오고 value 값도 가져온 뒤 기존의 state 값을 deep copy 한 뒤 내가 입력하고 있는 input 의 property 값만 덮어쓰기
		console.log(name, value);
		setVal({ ...Val, [name]: value });
	};

	const handleSumbit = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	// 인수값으로 state 를 전달받아서 각 데이터별로 인증처리 후
	// 만약 인증에러가 발생하면 해당 name 값으로 에러문구를 생성해서 반환하는 함수
	const check = (value) => {};

	// 전송이벤트 발생 시 state 에 있는 인풋값들을 check 함수에 전달해서 호출
	// 만약 check 함수가 에러객체를 하나도 내보내지 않으면 인증 성공
	// 하나라도 에러객체가 전달되면 인증실패 처리하면서 name 값과 매칭이 되는
	// iuput 요소 아래쪽에 에러메세지 출력
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Layout title={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='h'>회원가입 폼 양식</legend>
					<table border='1'>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>userid</label>
								</th>
								<td>
									<input
										type='text'
										id='userid'
										name='userid'
										value={Val.userid}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>password</label>
								</th>
								<td>
									<input
										type='password'
										id='pwd1'
										name='pwd1'
										value={Val.pwd1}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* re password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>re-password</label>
								</th>
								<td>
									<input
										type='password'
										id='pwd2'
										name='pwd2'
										value={Val.pwd2}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>e-mail</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										// onChange 가 발생할 때마다 실시간으로 변경되고 있는 state 의 value 값을 출력
										value={Val.email}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* btnSet */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' />
									<input type='submit' value='send' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}
