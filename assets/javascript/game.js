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



// Outputting values to the current word!
var word = hangman.randomWord();


hangman.grabId('newWord').addEventListener('click', function() {
	 word = hangman.randomWord();
	
});

 console.log(word);



// The array of letters from the random word
var arr = word.split('');



// ---- replacing every single letter
var piece = [];


// Looping or mapping over the letters of the random word
arr.map(function(element){
	var result = element.replace(element, '_');
	piece.push(result);
});


// Outputing it to the DOM

var decreasing = hangman.guessRaiming;



var newWord = hangman.randomWord();


// Do this with the user's pressing a button
document.onkeyup = function(event){

	// Outputting the key letter to the DOM in the already guessed
	var typing = document.createTextNode(event.key + ',');
	hangman.grabId("Guessed").appendChild(typing);

	arr.map(function(element, index){

		if(element === event.key){
			
			piece[index] = element;


		}


	}); // end of the mapping array
	

var currentWordString = piece.join("");


// Output to the current word to the DOM
hangman.output('currentWord', currentWordString);

//console.log(word);

console.log(currentWordString);

if(currentWordString === word){
	// console.log(newWord);
	hangman.output('win', "Your score is " + hangman.win++);

}
else{

	hangman.output('guessRemaining', 'Your chances remaining is ' + decreasing--); 

	console.log("They are not equal");
}




};

hangman.output('currentWord', piece);





























