function RankItems({ item }) {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.math}</td>
			<td>{item.chemistry}</td>
			<td>{item.physics}</td>
			<td>{item.percentage.toPrecision(3)}</td>
		</tr>
	)
}
export default RankItems
