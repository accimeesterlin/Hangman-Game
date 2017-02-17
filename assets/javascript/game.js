var hangman = {
	win:1, 		// Storing the win points
	currentWord: ['sad', 'go', 'move', 'test'], 	// Storing words

	
	// Getting a random word from the current word array
	randomWord: function(){
		var result = Math.floor(Math.random() * this.currentWord.length);
		var word = this.currentWord[result];

		return word;
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

// Pseudo Code





// Store the computer typing result (word)
	// No letter twice to the DOM
	// Output every letter to the DOM every time we're typing


// Guess remaining

// Generate a new word
	// Output this word to the current word in DOM with (---)
	// Check if the letter from computer typing equal any letter from the word
		// then grab the Dash function and output the word accordingly 
	// Check if the new generated word is equal to the computer typing result
	 	// Reset computer typing result
	 	// Generate another new word everytime :
			// Chances remaining is equal to 0
			// Current word is equal to computer typing result (word)
			// Output it the current word in DOM with (--)

var word = hangman.randomWord();

var arr = word.split("");
console.log(word);



// Replacing the word with the Dash
piece = [];
function replaceDash(){
	return arr.map(function(element){
					piece = [];
					var result = element.replace(element, ' __ ');
					piece.push(result);
				});
}

replaceDash();
//hangman.output("currentWord", piece);



// Non Duplicated letters
function nonDuplicated(){
	typing.push(event.key);
		norepeat = [];
		norepeat = typing.filter(function(e, index, self) {
		return index == typing.indexOf(e);
	});

	//console.log(norepeat);

	
}



var typing = [];
var norepeat = [];

var wordMatch = [];


document.onkeyup = function(event){
nonDuplicated();


hangman.output('Guessed', norepeat);	

	arr.map(function(e, index) {
		if(e === event.key){
			wordMatch.push(e);
			piece[index] = e;
			hangman.output('currentWord', piece);


			if(piece.join("") === word){
				console.log("Yayyyy, it worked!");
				norepeat = [];
				hangman.output('Guessed', norepeat);
				console.log(piece.join(""));

				// word = hangman.randomWord();

				// console.log(word);
				// console.log(norepeat);
				// replaceDash();
				// console.log(piece);
				// console.log(norepeat);
				// hangman.output('win', hangman.win++);
			}
		}

		
	});


console.log(norepeat.join(''));

};


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






























