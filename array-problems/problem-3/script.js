// Define a function that takes in an array of numbers/integers and returns the sorted version of that array, from greatest to least.


/*

Step 1 Declare a variable and assign it to an array.

Step 2 Define a function with an array as a parameter.

Step 3 Within the function, use a sort method and a comparison function to compare two values within the array for arrangement. 

Step 4 Still within the function, add if statements to check if the condition of the two values from compare function are met
and return result.

Step 5 Logging to console to test function

*/


/*

First, I declared a variable and assigned it to an array with integers in it to compare and sort.

Second, I defined a function with an array paremeter.

Third,  Within the function, I used a comparison function that will be used to compare two values represented by an a and b from the array to check if the first number in the comparison is 
greater than the second number and if it is, the returned number will be -1 to indicate than the first number should ordered before the second smaller number.

If the second number is greater than the first number, 1 will be returned meaning the second number will be first, which 
will sort the larger numbers first making it a descending order. 

0 will be returned if both the first and second numbers being compared are equal, which will keep their original order.


Finally, I used the console log to print the function using the variable assigned to the function as an argument.

*/



const sortNumberArray = [25, 16, 50, -6, 91, 12, -230, 25];

function arrayDescendingOrder(arr) {
	return arr.sort(function(a, b) {
		if (a > b ) {
			return -1;
		}
		if (a < b) {
			return 1;
		}
			return 0;	
	}); 
}


console.log(arrayDescendingOrder(sortNumberArray)); // [91, 50, 25, 25, 16, 12, -6, -230] //