import React from 'react'
import { Link } from 'gatsby'

const Button = ({ children, type, href }) => {
	return (
		<Link to={href} className={'btn ' + type}>
			{children}
		</Link>
	)
}

export default Button
