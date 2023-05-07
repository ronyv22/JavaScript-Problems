/*Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of three 
print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are 
multiples of both three and five print "fizzBuzz".*/

/*
step 1: define a function that will loop integers 1 through 100.
step 2: declare a variable called word with an empty string.
step 3: use an if and else if statements to check whether numbers in the loop are multiples of 3 or 5, 
print "Fizz" or "Buzz" respectively. Print "FizzBuzz" if number is a multiple of 3 and 5. If number is not 
a multiple of neither number than the number itself is logged.
step 4: Function logs the number and word if applicable.
*/


/*

Used a for loop to iterate through integers 1 to 100 in the fizzBuzz function

Declared an empty string variable called word to create an output for each integer in the loop

In the if statement a comparison and modulo operator is used to determine if the integers in the for loop 
are divisible by 3 or 5 without a remainder.

The strict equality operator is used to check for type and value equality. 

The if function checks that the integer is divisible by 3 or 5 is true then "Fizz" and "Buzz" is retuned 
respectively.

The && operator is used to make sure if any integers in the for loop are divisible by 3 and 5 then "FizzBuzz" 
is returned if true.

Used console log the variables i and word to the console.

Execute fizzBuzz function to see result. 

*/




function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
  	let word = "";
  	

  	if (i % 3 === 0){
  	  word += "Fizz";	
  	}
  	if (i % 5 === 0){
  	  word += "Buzz";	
  	}
  	else if (i % 3 === 0 && i % 5 === 0){
  	  word += "FizzBuzz";	
  	}
   

    console.log(i, word);
  }
}


fizzBuzz();