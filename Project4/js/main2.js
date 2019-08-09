// JavaScript document

// To bind the header and the section elements to the header and section variables

let header = document.querySelector('header');
let section = document.querySelector('section');


// To store the URL of a JSON file in a variable
let requestURL = 'http://aws.computerstudi.es/~gc900182471/json/js/i-scream.json';

//step 4 - Create a new XHR object

let request = new XMLHttpRequest();

//To open a new request using the request method

request.open('GET', requestURL);

// To set JavaScript to accept JSON from the server

request.responseType = 'json';

// To send the request

request.send();

// To add event handler - listening for the onload event o the JSON file/object

request.onload = function() {
	var weirdPeals = request.response;
	websiteHeader(weirdPeals);
	weirdProducts(weirdPeals);
}

// step 9

function websiteHeader(jsonObj) {
	//add the company name
	var headH1 = document.createElement('h1');
	headH1.textContent = jsonObj['websiteName'];
	header.appendChild(headH1);
	//add the company info
	var headPara1 = document.createElement('p');
	headPara1.textContent = 'Our Location ' + jsonObj['location'] + ', EstablishedDate' + jsonObj['establishedDate'];
}

// Step 10 - Creating the weirdProducts function

function weirdProducts(jsonObj) {

	// bind the JSON obj weirdProducts to a variables

	let weirdProducts = jsonObj['weirdProducts'];

	//loop through the top flaovurs object

	for (let i = 0; i < weirdProducts.length; i++) {
		//build the html elements
		let a = document.createElement('article');
		let h2 = document.createElement('h2');
		let images = document.createElement('img');
		let para1 = document.createElement('p');
		let para2 = document.createElement('p');
		let ul = document.createElement('ul');

		// set the text content

		images.setAttribute('src', 'http://aws.computerstudi.ex/~gc900182471/json/images/' + weirdProducts[i].images);
		images.setAttribute('alt', weirdProducts[i].productName);
		h2.textContent = weirdProducts[i].productName;
		//assign para1 - price
		para1.textContent = weirdProducts[i].price;
		//para2 - description
		para2.textContent = weirdProducts[i].description;
		//ul = list contents
		let contents = weirdProducts[i].contents;
		//build a loop to loop through the ingredient list
		for(var j = 0; j < contents.length; j++) {
			let listItem = document.createElement('li');
			listItem.textContent = contents[j];
			list.appendChild(listItem);
		}

		// Append each item to the section element
		a.appendChild(images);
		a.appendChild(h2);
		a.appendChild(para1);
		a.appendChild(para2);
		a.appendChild(ul);
		section.appendChild(a);
	}
}


