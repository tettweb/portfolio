/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: 'https://larouche-dev.com/stett/graphql',
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'work sans:100,200,300,400,500,600,700,800,900',
					'manrope:200,300,400',
				],
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
	],
}
