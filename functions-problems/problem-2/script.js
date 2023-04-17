//Write a JavaScript function that accepts a string as a parameter and counts the 
//number of vowels within the string.



/* 
step 1: define a Javascript function that accept a string as a parameter called countVowels
step 2: split the string passed in, turning it into an array of each individual letter,
store it into a variable called arrayOfLetters
step 3: define a variable called numberOfLetters and set the inital value to be equal to 0
step 4: define avariable that defines what a vowel is in an array called, arrayOfVowels
step 5: use a for loop to loop through the arrayOfLetters variable with an if statement
to check if the current letter in our loop is a vowel
step 6: increase the count
step 7: return the count of vowels in the string
*/


// defined the function: countVowels with a string parameter to out the amount of vowels in a
//given string
function countVowels(str) {
// declared a variable called arrayOfLetters  	
	const arrayOfLetters = str.split("");
	let numberOfLetters = 0;
	const arrayOfVowels = ["a", "e", "i", "o", "u"];

	for(let i = 0; i < arrayOfLetters.length; i++) {
		if(arrayOfVowels.includes(arrayOfLetters[i])) {
			numberOfLetters += 1;
	 }
	}

	return numberOfLetters;
}

console.log(countVowels("What is the number of vowels that are in this sentence?"));