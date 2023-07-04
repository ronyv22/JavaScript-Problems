//Write a JavaScript function that accepts a string as a parameter 
//and find the longest word within the string.


/*
step 1: define a JavaScript function that accepts a string as a parameter
step 2: split the string, turn it into an array of individual words,
store it in a variable called arrayOfWords
step 3: define a variable called longestWord and set the initial value as an empty string;
step 4: start looping through our array of words
step 5: check if the current word in our array is longer than current value in the longestWord variable
step 6: if it is, update the value of current word 
step 7: return the longest word in the string
*/


// Intialized a function called findLongestWord for the string value that is passed when function is called
// Initialized a variable called arrayOfWords to split up the string into an array by the space
// between them
// Initialized a variable called longestWord and set the value as an empty string as placeholder with
// no value
// Initialized a for loop to check if whether the current word in arrayOfWords array is
// longer than the longestWord variable. If so, it will update the value of the longestWord to the
// current word	
// After the loop, the longestWord variable will be returned, printing the longest
// word found in the string


function findLongestWord(str) {
	const arrayOfWords = str.split(" ");
	let longestWord = "";


	for(let i = 0; i < arrayOfWords.length; i++) {
		if(arrayOfWords[i].length > longestWord.length) {
			longestWord = arrayOfWords[i];
		}
	}


	return longestWord;
}							

console.log(findLongestWord("Why is there a rabbit in that hat?")); // "rabbit" 


