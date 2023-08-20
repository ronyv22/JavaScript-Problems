//Write a JavaScript function to remove duplicate numbers from an array of numbers.//

/*

Step 1 Define a function with an array as a parameter that will be used by the argument when the function is called.

Step 2 Within the function, declare a variable and assign it to an empty array for the numbers that appear once from the loop.

Step 3 Use a for loop to check if current number in the loop is not already in the array to add it.

Step 4 Use a return statement to call the value of the array from the function.

Step 5 Declare a variable and assign it to an array with number values in it.

Step 6 Console.log to test output of function.

*/


/*

To write a function to remove duplicates from an array of numbers, the first thing I did was to define a function with an array as a parameter.

Next, I delcared a variable called uniqueNumbers, which will be assigned to an empty array to hold the numbers that do not appear more than once
when we loop through the array input when the function is called.

To loop through the array to get the desired output, I used an if statement with the includes method to check if the current number in the loop isn't 
already in the uniqueNumbers array it will be added into the array using the push method.

For the last part of the function, I used a return statement, which will now contain the unique numbers from the input value when the array is called.


And to test if the the function works, I will declare another variable called numbersArray that will have an array of numbers with some of them appearing
more than once. I then used the console.log to call the function with the input values from the numbersArray.


*/



function removeDuplicateNumbers(arr) {
	let uniqueNumbers = [];
	for (let i = 0; i < arr.length; i++) {
		if(!uniqueNumbers.includes(arr[i])) {
			uniqueNumbers.push(arr[i]);
		}
	}

	return uniqueNumbers;
}


let numbersArray = [1, 5, 5, 12, 16, 16, 16, 26, 35, 35, 66, 100, 115, 115, 150];
console.log(removeDuplicateNumbers(numbersArray));  //expected output: [1, 5, 12, 16, 26, 35, 66, 100, 115, 150]
