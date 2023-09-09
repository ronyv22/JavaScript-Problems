/* Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and console logs the first and last names of all the people. */

/*

Step 1 Define an array of objects with properties.

Step 2 Define a function with an array as parameter.

Step 3 Within the function, use a for each method to loop through the array.

Step 4 Also within the function, after looping through array, use the + operator to add the first and last name into a string.

Step 5 Call the function with the object as an argument that. 


*/



/*

First, I defined an array of objects called people, with properties consisting of first name, last name and age.

Next, I defined a function called displayFullName with the with word person as the parameter. It will represent the current object
being processed in the array when the function is executed.

To bring the first and last name properties into a single string, I declared a variable called fullName with the firstName and lastName
properties assigned to it. The + operator is used to concatenate the first and last names of the person object separated by a space between them. 

The fullName variable will be logged into the console when the function is called.

Finally, I used the forEach method to run the function to print the full name of each person in the people objects array.

*/




const people = [
  {
	firstName: 'Dwayne',
	lastName:  'Johnson',
	age: 51
  },
  {
 	firstName: 'Vin',
 	lastName: 'Diesel',
 	age: 56
  },
  {
 	firstName: 'Jason',
 	lastName: 'Statham',
 	age: 56		
  },
  {
 	firstName: 'Tyrese',
 	lastName:	'Gibson',
 	age: 44
  },
  {
 	firstName: 'Michelle',
 	lastName: 'Rodriguez',
 	age: 45 
  }
];


function displayFullName(person) {
	const fullName = person.firstName + ' ' + person.lastName;
	console.log(fullName);
}


people.forEach(displayFullName); //Expected Output: "Dwayne Johnson", "Vin Diesel", "Jason Statham", "Tyrese Gibson", "Michelle Rodriguez"


