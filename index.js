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
		const res = await fetch('https://rantestdb-4bfa.restdb.io/rest/contact?apikey=5ee2654b4e6043315b0af9c7')
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
	let photoKey = article.photo;
	// console.log(time.toLocaleString())
    const markup = `
    <div class="card">
		          <h2>${article.name}</h2>
		          <h5>Title description, Dec 7, 2017</h5>
		          <div class="articleimg">
		          <img src='https://rantestdb-4bfa.restdb.io/media/${photoKey}' height=300px width=100% >
		          </div>
		          <p>Some text..</p>
		          <p>
		            Sunt in culpa qui officia deserunt mollit anim id est laborum
		            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
		            exercitation ullamco.
		          </p>
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
