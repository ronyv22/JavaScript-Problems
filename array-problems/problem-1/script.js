//Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.//

/*

Step 1 Declare a variable and assign it to values that will put into an array.

Step 2 Declare a variable and assign it to the function.

Step 3 Define the function with two parameters,( array, number) and an if statement and a return statement put
 	   into a new array.

Step 4 Use the slice method to extract the specfied number and elements of the array to put into new array.	    

*/



/*
	First, I declared a variable, consumerElectronics and assigned it to an array which is storing various electonic name brands in it.

	Second, I declared another variable, this time assigning it to the function, getFirstArrayElements with 2 arguments
	the array that we stored the brand names into and the specified number element that will call the corresponding elements from the array.

	Next, defined the function with the two parameters, an array and number that will check if the the number is less than and or equal
	to 0. If so, the function will return an error message indicating that the number must be a positive number. 

	I also added some additional if statements with error messages for invalid inputs. One to check if the number entered in the function argument exceeds the array's length
	and one to print if the second argument is a not a number.

	Also, I used the slice method to extract and return the selected elements from the array via number into a new array.

	Finally, I used the console.log to print out the various massages from the function based on input errors. 


*/


const consumerElectronics = ['Sony', 'Apple', 'Intel', 'IBM', 'LG', 'Panasonic', 'Samsung', 'Fujitsu',  'Toshiba', 'Lenovo'];
const result = getFirstArrayElements(consumerElectronics, 2);

function getFirstArrayElements(arr, n) {
    if ( n <= 0) {
    return "Your input should be a positive number. Try again.";
  	}
  
  	if ( n > arr.length) {
  	return "The number of elements to return is greater than: " + arr.length + ",Try again.";	
  	}

  	if (isNaN(n)) {
  	return "Second argument is not a valid number. Please try again.";	
  	}

   return arr.slice(0, n);
}

   console.log(result);												 //returns [ 'Sony', 'Apple' ]	
   console.log(getFirstArrayElements(consumerElectronics, -2));      //returns Your input should be a positive number. Try again.                              
   console.log(getFirstArrayElements(consumerElectronics,20));       //returns The number of elements to return is greater than: 10, Try again.
   console.log(getFirstArrayElements(consumerElectronics,'Ten'));    //returns Second argument is not a valid number. Please try again.