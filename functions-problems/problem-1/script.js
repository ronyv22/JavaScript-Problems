//Write a JavaScript function that accepts a string as a parameter 
//and find the longest word within the string.


/*
step 1: define a JavaScript function that accepts a string as a parameter
step 2: split the string passed in, turn it into an array of words,
store it in a variable called arrayOfWords
step 3: define a variable called longestWord and set the initial value as an empty string;
step 4: start looping through our array of words
step 5: check if the current word in our array is longer than current value of longestWord variable
step 6: if it is, update the value of current word 
step 7: return the longest word in the string
*/


// Initialized a function called findLongestWord to pass a string as a parameter

function findLongestWord(str) {

// Initialized a variable called arrayOfWords to split the string into an array of words by the space
//	between them

	const arrayOfWords = str.split(" ");

// Initialized a variable called longestWord and set the value as an empty string as placeholder that 
// equates to the value of 0. It will be used as a starting value to compare within the loop

	let longestWord = "";

// Initialized a for loop with an if statement to check whether the current word in arrayOfWords is
// longer than the longestWord variable. If so, it will update the value of the longestWord to the
// current word	

	for(let i = 0; i < arrayOfWords.length; i++) {
		if(arrayOfWords[i].length > longestWord.length) {
			longestWord = arrayOfWords[i];
		}
	}

// After the loop, the longestWord variable will be returned, containing the longest
// word found in the string

	return longestWord;
}							

console.log(findLongestWord("Why is there a rabbit in that hat?")); // "rabbit" 


