/* Create an object, then write a JavaScript function that checks whether an object contains the specified key. */


/*

Step 1 Define an object with properties of key and pair values.

Step 2 Define a function with object and key as paramters.

Step 3 Use hasOwnProperty() method on object to check if object has a particular property.

Step 4 Log the function with the specified obj and key values into the console.

*/


/* 

First thing I did was define an object called user and added two properties within it.

Then, I defined a function called checkSpecifiedKey with an object and key as parameters that will be used when the function is called.

After defining the function, I used the hasOwnProperty() method to check if the object has the specfied property and return
specified property with a true or false when the function is called.

Finally, I log the function into the console to check the result.

*/


const user = {
  name: "Bob Sloane",
  age: 50	
};

function checkSpecifiedKey(obj, key) {
	return obj.hasOwnProperty(key)
}


console.log(checkSpecifiedKey(user, 'gender')); //Expected Output: false