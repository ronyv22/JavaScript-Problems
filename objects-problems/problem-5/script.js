/* Write a JavaScript function to sort the following array of objects by title value */

/*

Step 1 Define an array of objects with properties.

Step 2 Define a function as a comparison function to compare a pair of specified object properties in the array.

Step 3 Use a sort method to sort the array in ascending order.

Step 4 Log the object into console to see output.

*/



/*

First, I defined an aray of objects called books and assigned it with properties of key and value pairs. 

Second, I defined the function called sortByTitle as a compare function using a and b to represent the title properties that will be paired.

Within the function, I used if statements to check if the first title object (a) is less than the second title object (b). 

If it is, a negative value will return, putting the first title object before the second title object. 

If the first title object (a) is greater than the second title object (b) a positive value will return, putting the second title object before
the first making the objects array appear in ascending order (least to greatest) by title.

A value of 0 will return, meaning that the first and second title objects are of equal value and retain their respective positions.

Finally, I used the sort method to arrange the object array books using the function sortByTitle as an argument.

I log the object books into console to test the result.





*/



const books = [{ 

	author: 'Bill Gates', 
	title: 'The Road Ahead', 
	libraryID: 1254
   },
   { 
   	author: 'Steve Jobs', 
   	title: 'Walter Isaacson', 
   	libraryID: 4264
   },
   {
   	author: 'Suzanne Collins', 
   	title: 'Mockingjay: The Final Book of The Hunger Games', 
   	libraryID: 3245
   }
 ];

function sortByTitle(a, b) {

    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}

books.sort(sortByTitle);

console.log(books);


/*

Expected Output: 

[{
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]

*/