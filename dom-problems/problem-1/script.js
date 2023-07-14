//Write a JavaScript function to set the background color of that paragraph using an "onclick" event added to a button in the UI.

/*

html
Step 1 Create a basic html page wth a paragraph and button element.
Step 2 Add an Id attribute to paragraph element to be selected in JavaScript.
Step 3 Add an onclick attribute to button with the name of the JavaScript function.
Step 4 Create a script element with a src attribute to refer to Javascript file.

javascript
Step 1 Create a function with the same name as onclick attribute from the html document.
Step 2 Initialize a variable for paragraph element in html documemt for retrieval.
Step 3 Assign it to getElementById() method for the function to be triggered when button is clicked.
Step 4 Use html DOM style backgroundColor property to change color of paragraph.

*/


/*

First, I created a function that will be used to trigger the button from the html document with an onclick attribute.
Second, within the function, I initailized a variable with a getElementById() method to retrieve the Id attribute of the  
paragraph element from the html document when button is clicked.
Third, I then used the style property of the paragraph element to set the background color to cyan when function is called.

*/


function changeBackgroundColor() {
  const paragraph = document.getElementById('myParagraph');
  paragraph.style.backgroundColor = 'cyan';
}


