import React from 'react'
import { Link } from 'gatsby'
import '../scss/global.scss'

const Header = () => {
	return (
		<header>
			<nav>
				<div className='container row'>
					<ul className='row'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/gear'>Projects</Link>
						</li>
						<li>
							<Link to='/projects'>My Gear</Link>
						</li>
						<li>
							<Link to='/about'>About Me</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
