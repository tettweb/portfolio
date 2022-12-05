import React from 'react'

const HeadingWithSubtitle = ({ imageUrl, imageAlt, title, subtitle }) => {
	return (
		<div className='heading' style={{ backgroundColor: 'black' }}>
			<div className='container'>
				<img src={imageUrl} alt={imageAlt} />
				<div className='text'>
					<h1>{title}</h1>
					<p className='subtitle'>{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default HeadingWithSubtitle
