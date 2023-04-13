//Write a Javascript function that accepts a string as a 
//parameter and returns the number of vowels in that string



/*
step 1: define a JavaScript function that accept a string as a parameter
step 2: split the string passed in, turn it into an array of each individual letter,
store it in a variable called arrayOfLetters
step 3: define a variable called numberOfVowels and set the initial value to be equal to 0;
step 4: define a variable that defines what a vowel is, an array of vowels
step 5: start looping through our array of letters
step 6: chack if the current letter in our loop is a vowel
step 7: increase the count variable by one for every letter that is a vowel
step 8: return the count of vowels
*/


function countVowels(str) {
	let arrayOfLetters = str.split("");
	let numberOfVowels = 0;
	const arrayOfVowels = ["a", "e", "i", "o", "u"];


	for (let = 0; i < arrayOfLetters.length; i++) {
		if (vowels.indexOf(arrayOfLetters[i].toLowerCase()) !== -1) {
			numberOfVowels++;
		}
	}
	return numberOfVowels;
}

console.log(countVowels("Customers who bought this item also bought these drawings"));



