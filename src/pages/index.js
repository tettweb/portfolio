import React from 'react'

import Header from '../components/Header'

const Index = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<h1 id='homeTitle'>Simon Tett</h1>
			</div>
		</>
	)
}

export default Index

export const Head = () => (
	<>
		<title>STETRO - Portfolio</title>
		<meta name='description' content='This is the homepage' />
	</>
)
