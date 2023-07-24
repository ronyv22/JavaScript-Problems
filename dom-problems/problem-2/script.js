/*Write a JavaScript function to get the HREF attribute of the link when you click the button.

/*
html
Step 1 Create a basic html page with p element with a link inside.
Step 2 Add an id attribute to the <a> tag and a href attribute with the specified url.
Step 3 Create a button element with an onclick attribute to trigger the function when button element is clicked on. 
Step 4 Create another p element with an id attribute to be used to display the url when the function is triggered.
Step 5 Add a script tag to refer to the external JavaScript file.


javascript
Step 1 Declare a function that will trigger the onclick attibute it is assigned to from the html file.
Step 2 Intialize a variable that will retrieve the href attribute of the <a> tag by its id attribute.
Step 3 Assigning the href attribute to the .textcontent property to display the the url onto the second p element.

*/



/*
First, I declared a function from the onclick attribute to be used to activate upon button press to show the url.
Second, within the function I initialzed a variable that will get the attribute of the href by the anchor element's id.
Third, to display the url of the website on the page, I used the textcontent property with the value of the anchor tag to show the url link by using 
the second paragraphs element id.


*/



function getHref() {
	const linkHref = document.getElementById("link1").getAttribute("href");
	document.getElementById("hrefDisplay").textContent = linkHref;
}