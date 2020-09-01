// Variable Declaration
let ress;
let leftcolumn = document.querySelector('.leftcolumn');

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

let renderResults = articles => {
	// console.log(renderResults);
	// apply ternery operator
	articles.forEach(renderArticles)
};

// Finding  URL Path
const parseLocation = () => {
	let hash = window.location.hash.substr(1);
	hash = hash.replace('/', "");
	hash = hash.replace(/%20/g, " ");
	return hash || '/'
}
// console.log(parseLocation())

// Finding article by path
const findArticelByPath = (articles, path) => {
	return articles.find( article => article.title === path)
}

// Function to render all articles
const renderArticles = article => {
	// let time = article.publishedAt;
	console.log(article);
	let photoKey = article.image;
	let date = new Date(article.date);
    const markup = `
    <div class="card">
		          <div class="articleimg">
		          <img src='https://declutterjsarticles-673c.restdb.io/media/${photoKey}' height=300px width=100% >
		          </div>
		          <a href="#/${article.title}"><h1>${article.title}</h1></a>
				  <h5>${date.toLocaleDateString()}</h5>
				  <p>${article.description}</p>
	</div>
	`;
	leftcolumn.insertAdjacentHTML('beforeend', markup);
	// selectedArticle.innerHTML = markup
};

// Function to render selected article
let renderClickedArticle = article => {
	// let time = article.publishedAt;
	console.log(article);
	let photoKey = article.image;
	let date = new Date(article.date);
	let converter = new showdown.Converter();
	let md = article.content
	// var md = article.content;
	let html = converter.makeHtml(md);
	leftcolumn.innerHTML = `
	<div class="article-style">
	${html}
	</div>
	`
	};

// API Calling
async function getResults() {
	console.log('called')
	leftcolumn.innerHTML = '';
	try {
		const res = await fetch('https://declutterjsarticles-673c.restdb.io/rest/articles?apikey=5ee3001d4e6043315b0af9f8')
	.then(response => response.json())
	.then(data => ress = data);
	} catch (error) {
		alert(error)
	}
	if (parseLocation() === '/') {
		renderResults(ress);
	} else {
		let path = parseLocation();
		let article = findArticelByPath(ress, path);
		renderClickedArticle(article);
	}
}

//results.insertAdjacentHTML('beforeend', html);	
// Method Calling
window.onload = declutter();
getResults()

// document.onload = getResults()

window.addEventListener('hashchange', getResults);
// window.addEventListener('load', getResults());