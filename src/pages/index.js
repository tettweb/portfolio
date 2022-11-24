import React from 'react'

import Header from '../components/Header'

const index = () => {
	return (
		<>
			<Header />
			<div>index</div>
		</>
	)
}

export default index

export const Head = () => (
	<>
		<title>STETRO - Portfolio</title>
		<meta name='description' content='This is the homepage' />
	</>
)
