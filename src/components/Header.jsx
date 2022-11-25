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
							<Link to='/'>Projects</Link>
						</li>
						<li>
							<Link to='/gear'>My Gear</Link>
						</li>
						<li>
							<Link to='/'>About Me</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
