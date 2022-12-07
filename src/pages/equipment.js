import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import headingImage from '../images/icon.png'

const Equipment = ({ data }) => {
	return (
		<>
			<Header />
			<Heading
				imageUrl={headingImage}
				imageAlt='Temporary pic'
				title='My Equipment'
			/>
			<main id='gear'>
				<section className='intro'>
					<div className='container'>
						<h2>Title 2</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<Divider />
					</div>
				</section>
				<section className='gear'>
					<div className='container'>
						{data.allWpGearItem.edges.map(item => (
							<div className='item row'>
								<img
									src={item.node.featuredImage.node.sourceUrl}
									alt={item.node.featuredImage.node.altText}
								/>
								<div className='text col'>
									<h3>{item.node.title}</h3>
									<p className='desc'>{item.node.attributes.description}</p>
									<p className='specs'>
										Finish : {item.node.attributes.finish}
										<br />
										In my gear since : {item.node.attributes.inmygearsince}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export const query = graphql`
	query EquipmentQuery {
		allWpGearItem {
			edges {
				node {
					title
					attributes {
						description
						finish
						inmygearsince
						gallery {
							altText
							sourceUrl
						}
					}
					featuredImage {
						node {
							altText
							sourceUrl
						}
					}
				}
			}
		}
	}
`

export default Equipment
