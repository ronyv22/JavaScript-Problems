/*Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of three 
print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are 
multiples of both three and five print "fizzBuzz".*/

/*
step 1: define a function that will loop integers 1 through 100.
step 2: declare a variable called word with an empty string as a place holder.
step 3: use an if statement to check whether numbers in the loop are multiples of 3 or 5, 
print "Fizz" or "Buzz" respectively. Print "FizzBuzz" if number is a multiple of 3 and 5. If the number is not 
a multiple of neither number then an empty string is printed.
step 4: Function logs the number and word if applicable.
*/


/*

Used a for loop to iterate through 1 to 100 to check if the 
current number is divisible by 3 or 5 with no remainder

If they don't have a remainder then it means the the number is a multiple of
 3 or 5 respectively, which will print the word "Fizz" or "Buzz"

If number the current number in the loop is a multiple of both 3 and 5
the word "FizzBuzz" will be printed

Every other number that is not a multple of 3 or 5 will print an empty string


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
  

    console.log(i, word);
  }
}


fizzBuzz();