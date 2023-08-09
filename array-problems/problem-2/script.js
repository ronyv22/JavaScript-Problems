//Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.//

/*
	
Step 1 Define a function with an array parameter.

Step 2 Use a join method to return the combined array elements into a string separated by a space with a comma.

Step 3 Declare a variable and assign it to an array filled with array elements.

Step 4 Use console log to print the result.

*/



/*

First, I defined a function, with an array as a parameter where the fruits variable housing the array will go into.

Then, I used the join method on the array to turn it into a string, joining the array elements with a comma followed by a space.

Next, I declared a variable called fruits and assigned it to an array with array elements stored in it. 

I then declared another variable called result, which will be assigned to the function, joinArray with the fruit variable as an argument that will
be called with the function.

Finally, I print the string of joined array elements using console.log.

*/





function joinArray(arr) {
  return arr.join(', ');
}

let fruits = ['Apple', 'Banana', 'Carrot', 'Dragonfruit', 'Elderberry', 'Fig', 'Guava'];
const result = joinArray(fruits);
console.log(result);   // prints "Apple, Banana, Carrot, Dragonfruit, Elderberry, Fig, Guava"
