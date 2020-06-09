// Methods
function declutter() {
	console.log('Declutter JS, Just Reloaded')
}
	// Menu Toggle
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

/*
// Checking Purpose
const url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=9f1312f30bfe42d3ae1237ea14e28329";
fetch(url, {
	mode: 'cors'
})
*/
	// Calling News API

let ress;


async function getResults() {
	try {
		const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9f1312f30bfe42d3ae1237ea14e28329')
	.then(response => response.json())
	.then(data => ress = data.articles);
	// this.recipes = res.data;
	} catch (error) {
		alert(error)
	}

	console.log(ress)
	// renderResults(ress);
}
 getResults()

let results = document.querySelector('.results__list');

//results.insertAdjacentHTML('beforeend', html);


let renderArticle = article => {
    const markup = `
    <li>
		<div class="card">
	      <h2>${article.title}</h2>
	      <img height=100vh, width=100vw, src=${article.urlToImage}>
	      <h4>${article.author}</h4>
	      <textarea>${article.description}</textarea>
		</div>
	</li>
    
    `;
    results.insertAdjacentHTML('beforeend', markup);
};

let renderResults = articles => {
    // console.log(renderResults);
    
    articles.forEach(renderArticle)
};


// Method Calling
window.onload = declutter();
