// Animating H1 in home page
const homeTitle = document.getElementById('homeTitle')
let i = 0
let text = 'Simon Tett'

if (homeTitle) {
	homeTitle.innerHTML = ''
}

const typeWritterAnim = () => {
	if (homeTitle) {
		if (i < text.length) {
			homeTitle.innerHTML += text.charAt(i)
			i++
			setTimeout(typeWritterAnim, 130)
		}
	}
}

typeWritterAnim()
