import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json()) //fetch문에 대한 응답 성공시
			.catch((err) => console.log(err)) //fetch문에 대한 응답 실패시
			.then((json) => {
				setDepartment(json.members); //json데이터 변환에 대한 응답 성공시
			})
			.catch((err) => console.log(err)); //json데이터 변환에 대한 응답 실패시
	}, []);

	return (
		<Layout>
			<div className='container'>
				<div className='memberBox'>
					{Department.map((black, idx) => {
						return (
							<article key={black}>
								<div className='pic'>
									<img src={`${path}/img/${black.pic}`} alt={black.name} />
								</div>
								<h2 className='name1'>{black.position}</h2>
								<p className='name2'>{black.name}</p>
							</article>
						);
					})}
				</div>
				<div className='main1'>
					<p className='main2'>less.</p>
					<p className='main3'>+ Categories</p>
				</div>
			</div>
		</Layout>
	);
}
