import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
	return (
		<header>
			<nav>
				<ul className='col'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/gear'>Gear</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
