

var hangman = {
	win:1, 		// Storing the win points
	currentWord: ['glen', 'negan', 'daryl', 'rick', 'carl', 'rosita', 'carol', 'michonne', 'maggie', 'hershel', 'tyreese', 'beth', 'lori', 'merle', 'jesus', 'governor', 'andrea', 'eugne', 'sasha', 'gabriel', 'abraham', 'morgan'], 	// Storing words

	//title: ['title1', 'title2', 'title3', 'title4'],

	music: ['music1', 'music2', 'music3', 'music4'],

	images: ['./assets/images/glen.png', './assets/images/negan.png', './assets/images/daryl.jpg', './assets/images/rick.png', './assets/images/carl.png', './assets/images/rosita.png', './assets/images/carol.jpg', './assets/images/michonne.jpg', './assets/images/maggie.png', './assets/images/hershel.png', './assets/images/tyreese.png', './assets/images/beth.png', './assets/images/lori.jpg', './assets/images/merle.jpg', './assets/images/jesus.jpeg', './assets/images/governor.jpg', './assets/images/andrea.jpeg', './assets/images/eugene.png', './assets/images/sasha.png', './assets/images/gabriel.png', './assets/images/abraham.jpg', './assets/images/morgan.png'],

	
	// Getting a random word from the current word array
	randomWord: function(){
		var result = Math.floor(Math.random() * this.currentWord.length),
		 	word = this.currentWord[result];

		return word;
	},


	// Storing value for guess remaining
	guessRaiming:12,

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



// Storing the word
var word = hangman.randomWord(),
	//title = hangman.title,
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
					var result = arr[index].replace(arr[index], ' __ ');
					piece.push(result);
				});
}

replaceDash();

 hangman.output("currentWord", piece.join(""));



hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming);




var typing = [],
	wordMatch = [],
	anotherTyping = [],
	norepeat = [],
	notEqual = [];


// Reset the functionality
function reset(){
	word = hangman.randomWord();
	arr = word.split("");
	piece = [];
	replaceDash();
	hangman.output("currentWord", piece.join(""));
	typing = [];
	norepeat.length = 0;
	hangman.guessRaiming = 12;
	hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming)
	hangman.output("Guessed", norepeat)

	return word, piece, typing, norepeat.length, hangman.guessRemaining;
}



function data(){
	var result = hangman.currentWord;
	// Working good
	// console.log(result);
	return result.map(function(e, index, arr) {
	if(word === e){
		// console.log(e);
		//console.log("Yay it worked!");
		var test = result.indexOf(e);

		//hangman.output("title", title[test]);
		hangman.grabId("img").style.backgroundImage = "url(' " + images[test] + "')";
		//console.log(title[test]);
	}

	});
}

data();


// 
document.onkeyup = function(event){
hangman.grabId("warning").style.display = "none" ;	
	// Non Duplicated letters
	hangman.output("currentWord", piece.join("").toUpperCase());

	// Storing the typing
	typing.push(event.key.toUpperCase());

		norepeat = typing.filter(function(e, index) {
		return index == typing.indexOf(e);
	});



	hangman.output('Guessed', norepeat);


		arr.map(function(e, index) {
			if(e === event.key){
				piece[index] = e;
				hangman.output('currentWord', piece.join("").toUpperCase());
		
			}


			
		});

	

	// If the letter not equal any letter in the word
	if(!word.includes(event.key)){
			hangman.guessRaiming--;
			hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming);

			hangman.grabId("guessRemaining").style.color = "black";

		if(hangman.guessRaiming <= 0){	
			hangman.guessRaiming = 12;

			hangman.grabId("audio").setAttribute('src', './assets/sound/monster.mp3');
			hangman.grabId("audio").play();
			$('.ui.modal').modal('show');
			hangman.output("guessRemaining", "Your chances remaining is " + hangman.guessRaiming--);
			reset();
		}


		if(hangman.guessRaiming < 6){
			hangman.grabId("guessRemaining").style.color = "red";
			hangman.grabId("audio").setAttribute('src', './assets/sound/woopwoop.mp3');
			hangman.grabId("audio").play();

			hangman.grabId("warning").style.display = "block" ;
		}

	}

	// if result of the typing word equal to the random word
	else if(piece.join("") === word){
		hangman.grabId("audio").setAttribute('src', './assets/sound/aplause.mp3');
		hangman.grabId("audio").play();
		hangman.output("win", hangman.win++);
		reset();

	}

data();





};


// Bonuses

var scary = ['./assets/scary/scariest.jpeg', './assets/scary/scary1.jpg', './assets/scary/scary2.jpg', './assets/scary/scary3.jpg', './assets/scary/scary4.JPG'];


var number = Math.floor(Math.random() * scary.length)

hangman.grabId("scary").style.backgroundImage = "url('" + scary[number]+ "')";

console.log(scary[number]);



// Decrement every time the letter is not equal to the word
	// decrement if the letter is not inside the repeat letter;


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


























