/* 
Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the 
number of items and displays the item in the list when you select from the dropdown list.
*/

/*
html
Step 1 Create an html page with a dropdown list with options in it.
Step 2 Add an id attribute and an onchange event that will be used for when the function is called.
Step 3 Add a p element with id attribute to print function result.
Step 4 Add a script tag that will use the javascript file where the function is located.



javascript
Step 1 Define a function.
Step 2 Declare a variable that will use the id attribute of the dropdown list.
Step 3 Declare a variable to store the selected options into an array.
Step 4 Declare a for loop through the dropdown list.
Step 5 Declare a variable to print the textcontent on to the p element. 
*/


/*

First, I defined the function that will be called when a selection from the dropdown list is changed.

I did this by first declaring a variable and assigned it the select element by the id attribute retrieved from the html file using the getElementById method.

Next, I declared a variable and assigned an empty array to store the selected options from the dropdown list.

After that, I used a for loop to check if the current option is selected and if it is, it retrieves
the text of the selected option and adds it to the selectedItem array using the push method.

Finally, I declared another variable which will update the result onto the p element by retrieving its id from the html file and
using the textContent to return the number of items as well as the selected item from the array into a string.

*/


function displayItemSelect() {
  const dropdown = document.getElementById("shape-names");
  const selectedItem = [];

  for (let i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].selected) {
      selectedItem.push(dropdown.options[i].text);
    }
  }

  const result = document.getElementById("itemDisplayResult");
  result.textContent = "Number of items: " + dropdown.options.length + ", Selected item: " + selectedItem;
}
