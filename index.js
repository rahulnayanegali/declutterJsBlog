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

let ress;
async function getResults() {
	try {
		const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=9f1312f30bfe42d3ae1237ea14e28329')
	.then(response => response.json())
	.then(data => ress = data.recipes);
	// this.recipes = res.data;
	} catch (error) {
		alert(error)
	}

	console.log(ress)
	// renderResults(ress);
}
 getResults()
// console.log(ress)
// fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza')
// 	.then(response => response.json())
// 	.then(data => res = data.recipes);

// let recipesArray = res.recipes;

// let html = `<h1>Hello World!</h1>`
let results = document.querySelector('.results__list');

//results.insertAdjacentHTML('beforeend', html);


let renderRecipe = recipe => {
    const markup = `
    <li>
		<div class="card">
	      <h2>${recipe.title}</h2>
	      <img height=100vh, width=100vw, src=${recipe.image_url}>
	      
	      <p>${recipe.publisher}</p>
		</div>
	</li>
    
    `;
    results.insertAdjacentHTML('beforeend', markup);
};

let renderResults = recipies => {
    // console.log(renderResults);
    
    recipies.forEach(renderRecipe)
};

// renderResults(ress);