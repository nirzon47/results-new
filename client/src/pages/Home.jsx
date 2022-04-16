import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<div className='welcome'>
				<h1>WELCOME</h1>
				<div className='btn-group'>
					<button>
						<Link to='/new'>New entry</Link>
					</button>
					<button>
						<Link to='/ranks'>Show rankings</Link>
					</button>
				</div>
			</div>
		</>
	)
}
export default Home
