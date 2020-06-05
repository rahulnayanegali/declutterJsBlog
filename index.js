function declutter() {
	console.log('Declutter JS, Just Reloaded')

	// Menu Toggle


}

const toggleMenu = () => {
		let hamburgerMenu = document.querySelector(".hamburger-btn");
		let navBar = document.querySelector(".nav-bar");
		hamburgerMenu.classList.toggle("change")
		if (navBar.style.display=='block') {
			navBar.style.display = 'none';
		} else {
			navBar.style.display = 'block';
		}




	}
window.onload = declutter();

const menuToggle = () => {
		document.querySelector('.nav-bar').style.display = 'block';
	}