//Write a JavaScript function that accepts a string as a parameter and counts the 
//number of vowels within the string.



/* 
step 1: define a Javascript function that accept a string as a parameter called countVowels
step 2: convert the string into lowercase letters and split the string, turning it 
into an array of each individual letter, store it into a variable called arrayOfLetters
step 3: define a variable called numberOfLetters and set the inital value to be equal to 0
step 4: define a variable that defines what a vowel is in an array called, arrayOfVowels
step 5: use a for loop to loop through the arrayOfLetters variable with an if statement
to check if the current letter in our loop is a vowel
step 6: increase the count everytime a letter is a vowel
step 7: return the count of vowels within the string
*/


//Defined the function: countVowels with a string parameter to put out the amount of vowels in a
//given string
//Declared a variable called arrayOfLetters with a split method to breakdown each word in the
//string into an array of characters to be looped through and a toLowerCase method to convert 
//the string input into lowercase letters
//Initialized a variable called numberOfLetters and set the value to 0 to be used 
//as a starting point to store the vowels found with in the string during the loop
//Defined a variable called arrayOfVowels for all the vowels that are found in the string 
//Created a for loop that will go through every character in the string input to determine whether
//it is a vowel or not
//The variable i is used as an index of the current letter being checked in the string	
//Using an if statement with the includes method to check if current letter is a vowel or not and 
//if it is a vowel is, numberOfLetters variable is incremented by 1 
//The return statement in the function is using the variable numberOfLetters to return 
//the total number of vowels found within the string 
//Use the console log to call the countVowels function with string input 
//What is a man? A miserable pile of secrets!"
//14 is count

function countVowels(str) {
	const arrayOfLetters = str.toLowerCase().split("");
	let numberOfLetters = 0
	const arrayOfVowels = ["a", "e", "i", "o", "u"];
	
	for(let i = 0; i < arrayOfLetters.length; i++) {
		if(arrayOfVowels.includes(arrayOfLetters[i])) {
			numberOfLetters += 1;
	 }
	}


	return numberOfLetters;
}


console.log(countVowels("What is a man? A miserable pile of secrets!"));