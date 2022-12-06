import React from 'react'
import { Link } from 'gatsby'

const Button = ({ type, uppercase, href }) => {
	return (
		<Link to={href} className={'btn ' + type}>
			Button
		</Link>
	)
}

export default Button
