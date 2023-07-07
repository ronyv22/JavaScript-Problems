//Write a JavaScript function that accepts two arguments, a string and a letter and the  
//function will count the number of occurrences of the specified letter within the string.

/*
step 1: define a function that accepts a string and a letter as a parameters called countLetter
step 2: define a variable called letterCount with a value of 0
step 3: use a for loop with an if statement using the str.charAt method and variable called 
charPosition to check if current character in the string input is equal to specified letter
step 4: increment the letterCount variable by 1 if it does
step 5: return the number of the specified letters within the string input
*/


/*
Defined the function countLetter with a string and letter parameters so we can get the amount of how many times
a specified letter appears in a string

Initialized the variable letterCount with the index value of 0 as a starting point for the loop 

Created a for loop that will return the amount of the matching specifed letter from the string input

console log to print the result from the function

*/


function countLetter(str,letter) {
  let letterCount = 0;

 for (let charPosition = 0; charPosition < str.length; charPosition++) {
	if (str.toLowerCase().charAt(charPosition) === letter.toLowerCase()) {
	  letterCount += 1;
    }

  }

  return letterCount;
}

console.log(countLetter('I hope this helps. Let me know if you have any further questions.', 'i'));