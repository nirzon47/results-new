import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function RankItems({ item }) {
	const navigate = useNavigate()

	const deleteEntry = (id) => {
		axios.delete(`/api/marks/${id}`).then((res) => {
			if (res.status === 200) {
				navigate('/ranks')
				toast.success('Item Deleted')
			}
		})
	}

	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.math}</td>
			<td>{item.chemistry}</td>
			<td>{item.physics}</td>
			<td>{item.percentage.toPrecision(3)}%</td>
			<td>
				<Link to={`/edit/${item._id}`}>
					<FaEdit />
				</Link>
			</td>
			<td>
				<FaTrashAlt onClick={() => deleteEntry(item._id)} />
			</td>
		</tr>
	)
}
export default RankItems
