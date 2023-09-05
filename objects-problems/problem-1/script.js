/* Create a sample object, then write a JavaScript function that deletes the property of an object passed to it. */

/*

Step 1 Define an object with properties, keys and value pairs.

Step 2 Define a function with an object and property as paremeters.

Step 3 Within the function use the delete operator to remove selected property from the object.

Step 4 Use return statement to stop the function and return the object without the specified property.

*/

/*

 First, I defined an object called car and put several properties with key and value pairs (object literal) describing some attributes of a vehicle.

 Next, I defined a function called removeProperty with an object and property as parameters which will be used to to remove the 
 specified property when the function is called.

 To remove the specified property from the object, I used the delete operator with the the bracket notation to remove it.

 After that, I used the return statement to bring the bring the object with the removed property.


 I tested the function by logging into the console.


*/



const graphicCard = {
	brand: "NVIDIA",
	'product name': "GeForce RTX 4080",
	'year': "2023",
	'memory type': "GDDR6X",
	ram: "12 gigabytes"  

};


function removeProperty(obj, prop) {
	delete obj[prop];
	return obj;
}


console.log(removeProperty(graphicCard, "memory type")); // Expected output: { brand: "NVIDIA", product name: "GeForce RTX 4080", 'ram': "12 gigabytes", year: "2023" }