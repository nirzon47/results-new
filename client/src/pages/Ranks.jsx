import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import RankItems from '../components/RankItems'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

function Ranks() {
	const [Items, setItems] = useState([])
	const [Loading, setLoading] = useState(true)

	const getEntries = useCallback(async () => {
		await axios
			.get('/api/marks')
			.then((res) => {
				setItems(res.data)
				setLoading(false)
			})
			.catch((err) => toast.error(err.message))
	}, [setItems])

	useEffect(() => {
		getEntries()
	})

	return (
		<>
			<div className='heading'>
				<h1>Rankings</h1>
			</div>

			<div className='content'>
				{Loading ? (
					<Spinner />
				) : Items.length > 0 ? (
					<div className='rankItems'>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Maths</th>
									<th>Maths</th>
									<th>Physics</th>
									<th>Percentage</th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{Items.map((item) => (
									<RankItems key={item._id} item={item} />
								))}
							</tbody>
						</table>
					</div>
				) : (
					<div className='rankItems'>
						<h3>No entries found</h3>
						<Link to='/new'>
							<h3 className='redirect'>Click here to enter a new entry</h3>
						</Link>
					</div>
				)}
			</div>
		</>
	)
}
export default Ranks
