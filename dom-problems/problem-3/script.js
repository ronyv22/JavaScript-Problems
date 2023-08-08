/* 
Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the 
number of items and displays the item in the list when you select from the dropdown list.
*/

/*
html
Step 1 Create an html page with a dropdown list with options in it.
Step 2 Add an id attribute and an onchange event where the function will be used when called.
Step 3 Add a p element with id attribute to print function result.
Step 4 Add a script tag that will use the javascript file where the function is located.



javascript
Step 1 Define a function.
Step 2 Declare a variable that will use the id attribute of the dropdown list from the html.
Step 3 Declare a variable to store the selected options into an array.
Step 4 Declare a for loop through the dropdown array.
Step 5 Declare a variable to print the textcontent on to the p element. 
*/


/*

First, I defined the function that will be called when a selection from the dropdown list is changed.

I did this by first declaring a variable and assigned it the select element by the id attribute retrieved from the html file using the getElementById method.

Next, I declared a variable and assigned it to the value of the selected option.

After that, I declared another variable, using the selectedIndex and text properties to get the corresponding text of the of the selected option.

Finally, I declared another variable which will update the result onto the p element by retrieving its id from the html file and
using the textContent property to return the number of items as well as the selected item from the array into a string.

*/


function displayItemSelect() {
  const dropdown = document.getElementById("shape-names");
  const selectedItem = dropdown.value;
  const selectedText = dropdown.options[dropdown.selectedIndex].text;

  const result = document.getElementById("itemDisplayResult");
  result.textContent = "Number of items: " + dropdown.options.length + ", Selected item: " + selectedItem;
}
