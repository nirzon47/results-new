import { Link } from 'react-router-dom'
import { FaPlus, FaEdit, FaSearch } from 'react-icons/fa'

function Header() {
	return (
		<>
			<header className='header'>
				<div className='logo'>
					<Link to='/'>Rankings</Link>
				</div>
				<ul>
					<li>
						<Link to='/new' title='Add a new Entry'>
							<FaPlus />
						</Link>
					</li>
					<li>
						<Link to='/edit' title='Edit an existing entry'>
							<FaEdit />
						</Link>
					</li>
					<li>
						<Link to='/ranks' title='Show the rankings'>
							<FaSearch />
						</Link>
					</li>
				</ul>
			</header>
		</>
	)
}
export default Header
