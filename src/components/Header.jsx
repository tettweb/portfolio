import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix, Link } from 'gatsby'
import '../scss/global.scss'

const Header = () => {
	return (
		<>
			<Helmet>
				<script src={withPrefix('script.js')} type='text/javascript' />
			</Helmet>
			<header>
				<nav>
					<div className='container row'>
						<ul className='row'>
							<li>
								<Link to='/' activeClassName='active'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/projects' activeClassName='active'>
									Projects
								</Link>
							</li>
							<li>
								<Link to='/equipment' activeClassName='active'>
									My Equipment
								</Link>
							</li>
							<li>
								<Link to='/' activeClassName='active'>
									About Me
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header
