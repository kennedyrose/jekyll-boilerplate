module.exports = () => {
	// Allows :active styles to work in CSS for mobile Safari
	document.addEventListener("touchstart", ()=>{}, true)
}