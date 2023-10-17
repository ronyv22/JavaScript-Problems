/* Write a JavaScript function to compute the sum of an array of integers. */

/*

Step 1 Define a function to get the total sum of the array with array as an argument.

Step 2 Check the length of the array to make a base case for the recursion. 

Step 3 If array has more than one element in it, initialize recursive call. 

Step 4 Log function into console with the specified array of numbers input.


*/


/*

First, I defined a recursive function called sumOfArray with an array of integers as an argument.

Second, within the function, I made the base case for the recursion by using the .length property 
to check if the array length equals to 1 and if it is true, then only the element in the array would return.

Because there is more than one element in the array, I used the pop() method to remove the last element in the 
array and added it to the result of the recursive call which is made with the modified array.

The recursion will continue to reduce the size of the array until it reaches the base case with the length of the array being 1. 
After that, the function will then add the individual sums of the array back together until the final sum is calculated.

Finally, I log the function to the console with the specified array of integers to print the total sum. 

*/




function sumOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } 
    else {
    return arr.pop() + sumOfArray(arr);
  }
}


console.log(sumOfArray([15, 29, 36, 4, 57, 121])); //Expected Output: 262