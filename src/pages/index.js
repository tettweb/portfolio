import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Divider from '../components/Divider'
import Button from '../components/Button'
import Footer from '../components/Footer'
import headingImage from '../images/tett_header.png'

const Homepage = () => {
	return (
		<>
			<Header />
			<Heading
				imageUrl={headingImage}
				imageAlt='Simon Tett'
				title='Simon Tett'
				subtitle='Video game music composer'
			/>
			<main id='home'>
				<section className='intro'>
					<div className='container'>
						<h2>Welcome!</h2>
						<p>
							Hi! My name is Tett. I’ve been a video game music composer since a
							couple of years now. Welcome to my website serving as a portfolio
							of my creations. My works are mainly personal projects that I have
							carried out for some of my friends, but I find myself ready to
							undertake many other kinds of projects.
						</p>
						<p>
							If you need someone who has musical skills and talents as well as
							a great passion for gaming, its music and the overall
							comprehension of what makes great video game soundtracks, you have
							found the perfect man for the job!
						</p>
						<Divider />
					</div>
				</section>
				<section className='skills'>
					<div className='container row'>
						<h2>My main skills</h2>
						<div className='row'>
							<div className='item col'>
								<img src='../images/guitar.svg' alt='Guitar' />
								<h3>Instruments</h3>
								<p>
									All my musical projects have real instrument recordings and
									musicianship. I've been playing keyboards since the age of 8
									then got more serious into guitar and bass at 15. Bass guitar
									is my main axe.
								</p>
							</div>
							<div className='item col'>
								<img src='../images/clef.svg' alt='Clef' />
								<h3>Composing</h3>
								<p>
									I've always been comfortable into composing music made for
									video games more than anything. Composing more personal stuff
									for myself have always been difficult for me, but I tend to
									feel more creative drive while crafting music for games.
								</p>
							</div>
							<div className='item col'>
								<img src='../images/sfx.svg' alt='lorem' />
								<h3>Sound effects</h3>
								<p>
									I have the abilty to produce and create sound effects. If you
									dream about having your own sound effects rather than the same
									ones heard from all the sound banks, I can create some for you
									using intruments and foley recording.
								</p>
							</div>
						</div>
						<Button href='/projects' type='reg'>
							Look at my work
						</Button>
					</div>
				</section>
				<div className='container'>
					<Divider />
				</div>
				<section className='me'>
					<div className='container row'>
						<h2>What about me?</h2>
						<img src='../images/tett.png' />
						<div className='text col'>
							<p>
								Regular text - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In tempus at lacus aliquet mollis. Nullam
								ultricies nibh eget ultrices imperdiet. Pellentesque est diam,
								gravida quis nisi vel, rhoncus viverra dui. Aenean eu ornare
								orci, ac tincidunt nisl. Praesent mollis ultricies neque sed
								scelerisque. Donec odio purus, vulputate sagittis imperdiet nec,
								pellentesque vel eros. Morbi ac maximus quam. Nulla ac molestie
								eros. Maecenas feugiat nulla nec magna dictum sagittis.
							</p>
							<p>
								Proin arcu mauris, dictum sodales sapien ut, lobortis consequat
								est. Sed mattis lobortis mauris nec pellentesque. Curabitur
								bibendum vel lectus eget luctus. In hac habitasse platea
								dictumst. Maecenas ornare nunc sed interdum dapibus. Sed eu
								aliquet mauris, ac posuere erat. Proin enim arcu, dictum a
								mollis at, efficitur in felis.
							</p>
							<Button href='/story' type='reg'>
								My story
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Homepage
