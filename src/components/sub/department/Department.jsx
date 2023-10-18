import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.catch((err) => console.log(err))
			.then((json) => {
				setDepartment(json.members);
			})
			.catch((err) => console.log(err));
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
