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


// Menu Toggle for small screens using hamburger icon
const menuToggle = () => {
		document.querySelector('.nav-bar').style.display = 'block';
	}


// Fetching Data from api

/*
fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza')
	.then(response => response.json())
	.then(data => console.log(data));
*/

let html = `<h1>Hello World!</h1>`
let results = document.querySelector('.results');

//results.insertAdjacentHTML('beforeend', html);