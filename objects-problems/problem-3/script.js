/* Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object. */


/* 

Step 1  Define an object with three items in it. 

Step 2  Define a function with an object as a parameter.

Step 3  Use Object.keys method to get the length of the object properties.

Step 4  Log the function with the object as an argument into the console.

*/


/*

I defined an object called, groceryItem with properties to describe said grocery item.

Next, I defined a function called getObjectLength with the object as a parameter.

After defining the function, I used the Object.keys() method to get an array of all the object's keys and used
the length property to get the number of items in the object.


Finally, I log the function onto the console with the object as the argument to print the result.


*/


const groceryItem = {
	type: 'Vegetable',
	name: 'Corn',
	qty: 12
}



function getObjectLength(obj) {
	return Object.keys(obj).length
}


console.log(getObjectLength(groceryItem)); // Expected Output: 3