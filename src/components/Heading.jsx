import React from 'react'

const Heading = ({ imageUrl, imageAlt, title, subtitle }) => {
	return (
		<div className='heading'>
			<div className='container row'>
				<img src={imageUrl} alt={imageAlt} />
				<div className='text col'>
					<h1>{title}</h1>
					{subtitle ? <p className='subtitle'>{subtitle}</p> : ''}
				</div>
			</div>
		</div>
	)
}

export default Heading
