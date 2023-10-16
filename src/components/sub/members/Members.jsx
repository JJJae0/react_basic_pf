import Layout from '../../common/layout/Layout';
import './Members.scss';

export default function Members() {
	return (
		<Layout title={'Members'}>
			<form>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table border='1'>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>User_id</label>
								</th>
								<td>
									<input type='text' id='userid' name='userid' />
								</td>
							</tr>

							{/* Password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>Password</label>
								</th>
								<td>
									<input type='Password' id='pwd1' name='pwd1' />
								</td>
							</tr>

							{/* re password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>re-Password</label>
								</th>
								<td>
									<input type='Password' id='pwd2' name='pwd2' />
								</td>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}
