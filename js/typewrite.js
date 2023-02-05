const textes = document.querySelectorAll(".typewriter span")
let prevText = textes[textes.length-1]
let i = 0

animate()
setInterval(_=> animate(), 5000)

function animate(){
	let index = (i++)%textes.length

	prevText.style.display = "none"
	textes[index].style.display = "block"

	prevText = textes[index]
}
