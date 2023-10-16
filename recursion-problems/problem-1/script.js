// Write a JavaScript function to calculate the factorial of a number.//


/* 
   Step 1 Define a function to calculate the specified factorial number.

   Step 2 Make a base case (stopping condition) with an if statement for factorial.

   Step 3 Make recursive call to multiply the values together. 

*/



/*
 	First, I defined a factorial function with the number a parameter representing the 
 	specified number that will be used to calculate when the function is called.

 	Within the function, I used a base case in the form of an if statement that will 
 	return a 1 if the number equals a 0 or 1.

 	If the number is neither a 0 or 1, the recursive case will call the
 	function with the argument of num - 1 and the multiply the result by num.

 	Next, the recursive calls will continue until the the num reaches the base case of 0 or 1.
 	Once it returns the 1, the function starts to go up the recursive call by multiplying the
 	results together from the 2 to the specified num.


	Finally, I logged the factorial function into the console with the specifed number that will 
	be calculated as an argument.
	


*/


function factorial(num) {
	if( num === 0 || num === 1) {
		return 1;
	} else {
	    return num * factorial(num - 1);	
	}
}


console.log(factorial(10)); // Expected Output: 3628800