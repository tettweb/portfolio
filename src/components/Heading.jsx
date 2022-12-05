import React from 'react'

const Heading = ({ imageUrl, imageAlt, title, subtitle }) => {
	return (
		<div id='heading'>
			<div className='mainContainer row'>
				<img src={imageUrl} alt={imageAlt} />
				<h1>{title}</h1>
			</div>
		</div>
	)
}

export default Heading
