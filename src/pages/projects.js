import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Divider from '../components/Divider'
import { graphql } from 'gatsby'
import headingImage from '../images/heading_projects.png'

const Projects = ({ data }) => {
	return (
		<>
			<Header />
			<Heading
				imageUrl={headingImage}
				imageAlt='Temporary pic'
				title='Projects'
			/>
			<main id='projects'>
				<section className='intro'>
					<div className='container'>
						<h2>Title H2</h2>
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
				<section className='projectList'>
					<div className='container'>
						{data.allWpProject.edges.map(project => (
							<div key={project.node.id} className='item'>
								<h3>{project.node.title}</h3>
								<div className='desc row'>
									<img
										src={project.node.featuredImage.node.sourceUrl}
										alt={project.node.featuredImage.node.altText}
									/>
									<div className='text'>
										<p>{project.node.acfMusicProjects.description}</p>
										{/* If not link comes from query, no link display */}
										{project.node.acfMusicProjects.link ? (
											<a
												className='btn reg'
												href={project.node.acfMusicProjects.link}
												target='_blank'
												rel='noreferrer'
											>
												Try the game
											</a>
										) : (
											''
										)}
									</div>
								</div>
								<div className='tracks'>
									<h4>Soundtrack</h4>
									{project.node.acfMusicProjects.files.map(track => (
										<div key={track.title} className='item row'>
											<p>{track.title}</p>
											<audio
												controls
												controlsList='nodownload'
												src={`https://storage.googleapis.com/stetro-portfolio-files/project-files/${track.namefile}`}
											></audio>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export const query = graphql`
	query ProjectsQuery {
		allWpProject(
			filter: {
				categories: { nodes: { elemMatch: { slug: { eq: "music" } } } }
			}
		) {
			edges {
				node {
					title
					acfMusicProjects {
						files {
							fieldGroupName
							namefile
							title
						}
						link
						description
					}
					content
					featuredImage {
						node {
							sourceUrl
							altText
						}
					}
					id
				}
			}
		}
	}
`

export default Projects
