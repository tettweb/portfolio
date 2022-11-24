import React from 'react'
import { Link } from 'gatsby'
import '../scss/global.scss'

const Header = () => {
	return (
		<header>
			<nav>
				<ul className='row'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/gear'>Gear</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
