

var hangman = {
	win:1, 		// Storing the win points
	currentWord: ['glen', 'negan', 'daryl', 'rick', 'carl', 'rosita', 'carol', 'michonne', 'maggie', 'hershel', 'tyreese', 'beth', 'lori', 'merle', 'jesus', 'governor', 'andrea', 'eugne', 'sasha', 'gabriel', 'abraham', 'morgan'], 	// Storing words

	title: ['title1', 'title2', 'title3', 'title4'],

	music: ['music1', 'music2', 'music3', 'music4'],

	images: ['./images/glen.png', './images/negan.png', './images/daryl.jpg', './images/rick.png', './images/carl.png', './images/rosita.png', './images/carol.jpg', './images/michonne.jpg', './images/maggie.png', './images/hershel.png', './images/tyreese.png', './images/beth.png', './images/lori.jpg', './images/merle.jpg', './images/jesus.jpeg', './images/governor.jpg', './images/andrea.jpeg', './images/eugene.png', './images/sasha.png', './images/gabriel.png', './images/abraham.jpg', './images/morgan.png'],

	
	// Getting a random word from the current word array
	randomWord: function(){
		var result = Math.floor(Math.random() * this.currentWord.length);
		var word = this.currentWord[result];
		var title = this.title[result];
		var music = this.music[result];
		var images = this.images[result];

		return [word, title, music, images];
	},


	// Storing value for guess remaining
	guessRaiming: 8,

	// Grabbing ID from the DOM by passing id as a parameter
	grabId: function(element){
		var grab = document.getElementById(element);
		return grab;
	},


	// Output data to the DOM with first parameter id, and second values
	output: function(el, val){
		this.grabId(el).textContent = val;
	}


};
console.log(hangman.images.length);
console.log(hangman.currentWord.length);


// Storing the word
var word = hangman.randomWord()[0],
	title = hangman.title,
	music = hangman.music,
	images = hangman.images,
	arr = word.split("");
console.log(word);
// console.log(title);
// console.log(music);
// console.log(images);



// Replacing the word with the Dash
piece = [];
function replaceDash(){
	return arr.map(function(element, index){
					// piece = [];
					var result = arr[index].replace(arr[index], ' __ ');
					// console.log(result);
					piece.push(result);

					// console.log(element);
				});
}

replaceDash();
//console.log(piece);
 hangman.output("currentWord", piece.join(""));




	



var typing = [],
	wordMatch = [],
	anotherTyping = [],
	norepeat = [];


// Reset the functionality
function reset(){
	word = hangman.randomWord()[0];
	arr = word.split("");
	console.log(word);
	piece = [];
	replaceDash();
	hangman.output("currentWord", piece.join(""));
	typing = [];
	norepeat.length = 0;
	hangman.guessRaiming = 9;
	hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming)
	hangman.output("Guessed", norepeat)

	return word, piece, typing, norepeat.length, hangman.guessRemaining;
}



function data(){
	var result = hangman.currentWord;
	// Working good
	console.log(result);
	return result.map(function(e, index, arr) {
	if(word === e){
		console.log(e);
		console.log("Yay it worked!");
		var test = result.indexOf(e);

		hangman.output("title", title[test]);
		console.log(title[test]);
	}

	});
}

data();


// 
document.onkeyup = function(event){

	// Non Duplicated letters
	hangman.output("currentWord", piece.join(""));

	// Storing the typing
	typing.push(event.key);

		norepeat = typing.filter(function(e, index, self) {
		return index == typing.indexOf(e);
	});


	hangman.output('Guessed', norepeat);


		arr.map(function(e, index) {
			if(e === event.key){
				//wordMatch.push(e);
				piece[index] = e;
				hangman.output('currentWord', piece.join(""));
		
			}


			
		});

	// If the letter not equal any letter in the word
	if(!word.includes(event.key)){
		hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming--);

		if(hangman.guessRaiming <= -1){	
			hangman.guessRaiming = 9;
			hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming--);
			reset();
		}

	}

	// if result of the typing word equal to the random word
	else if(piece.join("") === word){
		hangman.output("win", hangman.win++);
		reset();
		console.log("testing");
	}
data();



};


// Pseudo
// Loop through the current word array
	// Check and see if the word equal to the element of the array
		// Find the index of this word
		// Output the right title according to the index



// Generate a new word
	// Output this word to the current word in DOM with (---)
	// Check if the letter from computer typing equal any letter from the word
		// then grab the Dash function and output the letter accordingly 
	// Check if the new generated word is equal to the word
	 	// Reset computer typing result
	 	// Generate another new word everytime :
			// Chances remaining is equal to 0
			// Current word is equal to computer typing result (word)
			// Output it the current word in DOM with (--)


























