//Write a JavaScript function that accepts two arguments, a string and a letter and the  
//function will count the number of occurrences of the specified letter within the string.

/*
step 1: define a function that accepts a string and a letter as a parameters called countLetter
step 2: define a variable called letterCount with a value of 0
step 3: use a for loop with an if statement using the str.charAt method and variable called 
charPosition to check if string is equal to specified letter
step 4: increment the letterCount variable by 1 if it does
step 5: return the number of the specified letters within the string input
*/


/*
Defined the function countLetter with a string and letter so we can get amount of how many times
a specified letter appears in a string
Initialized the variable letterCount with the index value of 0 as a starting point in the loop 

The for loop starts by initializing the variable charPosition at 0. 

Next, it checks if charPosition is less than length of the string if it is, 
then the if statement checks to see if the letter in the current position of 
the string is equal to the specified letter. 

The string method toLowerCase, is also used to convert the string to lowercase 
to account for any uppercase letters that are in the string.

The variable letterCount will increase by 1 if the character matches the letter.

The return statement uses the letterCount variable which will contain the amount of times 
the specified letter appears in the string input.  

The function countLetter returns using the input values total amount of times the letter i 
appears in the string. 4 is the final output.
*/


function countLetter(str,letter) {
let letterCount = 0;

 for (let charPosition = 0; charPosition < str.length; charPosition++) {
	if (str.toLowerCase().charAt(charPosition) === letter) {
	letterCount += 1;
 }

}

  return letterCount;
}

console.log(countLetter('I hope this helps. Let me know if you have any further questions.', 'i'));