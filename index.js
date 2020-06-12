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


	// Calling News API

let ress;

/*
fetch('https://rantestdb-4bfa.restdb.io/rest/contact?apikey=5ee2654b4e6043315b0af9c7')
	.then(res => res.json())
	.then(data => console.log(data))
*/

async function getResults() {
	try {
		const res = await fetch('https://declutterjsarticles-673c.restdb.io/rest/articles?apikey=5ee3001d4e6043315b0af9f8')
	.then(response => response.json())
	.then(data => ress = data);
	// this.recipes = res.data;
	} catch (error) {
		alert(error)
	}

	console.log(ress)
	renderResults(ress);
}
 getResults()

let results = document.querySelector('.leftcolumn');

//results.insertAdjacentHTML('beforeend', html);


let renderArticle = article => {
	let time = article.publishedAt;
	let photoKey = article.image;
	let date = article.date;
	console.log(date);
    const markup = `
    <div class="card">
		          <div class="articleimg">
		          <img src='https://declutterjsarticles-673c.restdb.io/media/${photoKey}' height=300px width=100% >
		          </div>
		          <a href="#"><h1>${article.title}</h1></a>
		          <h5> 07/06/2020</h5>
		          <p>${article.description}</p>
		        </div>
    
    `;
    results.insertAdjacentHTML('beforeend', markup);
};

let renderResults = articles => {
    // console.log(renderResults);
    
    articles.forEach(renderArticle)
};


// Method Calling
window.onload = declutter();
