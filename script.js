console.log("Lets learn Web API's!");

// Today we will be taking a closer look at how web API's work

// A Web API is a developer's dream.
// It can extend the functionality of the browser
// It can greatly simplify complex functions
// It can provide easy syntax to complex code

// What is Web API?
// API stands for Application Programming Interface.
// A Web API is an application programming interface for the Web.
// A Browser API can extend the functionality of a web browser.
// A Server API can extend the functionality of a web server.
// We will be focusing on browser API's

// Browser APIs
// All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
// For example, the Geolocation API can return the coordinates of where the browser is located.

// Essentially, we use web API's to manipulate the DOM(Document Object Model) in our html to bring our pages alive.
// For this exercise we will leave our functional code uncommented so we can see how our web page changes.

// Lets look at an example.
// Uncomment the code below:

// document.querySelector("body").innerHTML = "I am new text!";


// Lets break this down:
// "document" is a reference to our hmtl page that our script is linked to.
// "document" is a reserved object in JS. This means when you type document, it already has an assigned value.
// We should avoid using document when naming variables or objects in our script.

// next we have the ".querySelector()" method. This method targets or references an element, class or id in our document.
// We selected the "body element" in our document. 
// We use "querySelector" because it is multi functional. You may know of getElementById or getElementByClass.
// "querySelector" can do all of the above. We can reference a class by adding a "." before our class name we are targetting
// like so: document.querySelector(".some-class").
// We can also reference an id in our document by adding a "#" before our id name we are targetting like so:
// document.querySelector("#some-id").

// Lastly, we used the ".innerHtml" property to change our body to have it say "I am a new text!".
// "innerHtml" will replace anything that exists inside an element with whatever value you give it.
// If you look at your developer tools on your web browser and click on the "Elements" tab, we can see that our div and button no longer exist
// and we only see the string that we added with "innerHtml".
// lets comment line 27 so we have some elements to work with moving forward.

// We can save references of elements to variables to speed up our coding. Instead of typing document.querySelector("") every
// time we want to reference something, we can save an element we know we will be working with a lot to a variable and use that instead.
// Lets look at example.
// Uncomment the code below:

// var divEl = document.querySelector(".div-el");
// console.log(document.querySelector(".div-el"));
// console.log(divEl);


// As we can see, when we console log the query for the element and the element we saved in the variable we get the same thing.

// Now that we have the reference for the "div-el" class, lets do something with it.
// Uncomment the code below:

// divEl.textContent = "I am new Text!";


// Lets comment line 64 and continue on.
// You may have notice that the ".textContent" property works similarly to the ".innerHtml" property.
// The p tag is missing. The major difference textConent and innerHtml is that textContent will only add text while
// innerHtml is the same as typing in your html document. Lets take a look.
// Uncomment the code below:

// divEl.innerHTML = "<button id='new-button' style='background-color:red'>I am a new button!</button>";


// We can now see that we have a new button inserted exactly as we typed it above. We can even add ids, classes or styling.
// Lets comment the code on line 73 before we continue.

// Lets say we want to change the text inside the "p" tag of our "div-el". That "p" tag is the first child of its parent ("div-el")
// we will use the property ".firstElementChild" to change the text of that "p" tag.

// divEl.firstElementChild.textContent = "Web API's are pretty cool!";


// We can also use the propeerty ".lastElementChild" to get the last child of that element .
// We want to do a little more with that "p" tag so lets set it as a variable.

// var divElP = divEl.firstElementChild;
// console.log(divElP);


// lets change the color of the text using the ".style" object with the "color" property.

// divElP.style.color = "yellow";


// We can use the style object to change many different css properties of an element.

// Now lets say we want to remove the "p" tag entirely. We will use the ."remove()" method to get rod of that element.
// Uncomment the code below:

// divElP.remove();


// Poof! its now gone from our page. 
// If we want to hide an element so we can use it later we can use the display property with the style object and set it to "none".

// Lets talk about creating elements for our html. We will use the ".createElement()" method to create an element that we want.
// Uncomment the code below:

// var btn = document.createElement("button")
// btn.textContent = "I am a new Button!"


// But wait, where is our new element?
// The element has been created by your script page but we have not told our script where we want to PLACE that element.
// Think of it like this: When we create an element it exists in javascript land, floating around in the ether, waiting for something to done with it.
// Once it is made we need to tell the element "go here". Once we do that we will see our element on our html.
// We will use the ".appendChild()" method which will add that element as the last child of whatever element we reference.
// Lets add our new button to our body.
// Uncomment the code below:

// document.body.appendChild(btn);


// When we look in our elements tab in the dev tools of our browser, we can see our new button as the last child of "body".
// If we want to add an element as the first child, we would use the ".prepend()" method instead.

// lets add a "textarea" to our divEl and also give it an ID using the ".setAttributes()" method.
// Uncomment the code below:

// var txtArea = document.createElement("textarea");
// txtArea.setAttribute("id", "txt")
// divEl.appendChild(txtArea);


// We now have a new text area to work with.

// Lets move on to event listeners.
// Eventlisteners do just that. They listen to an event created by the user on your webpage.
// What is an event?
// An event is anything a user does on your webpage, like clicking a button, or scrolling the mouse wheel, or pressing the enter key.
// There are many events we can track or "listen" for to execute some javascript when that event happens.
// Lets add an event listener to our click me button with the ".addEventListener()" method.
// Uncomment code below:

// document.querySelector("#button-1").addEventListener("click", function() {
//     return console.log("I have been clicked!");
// });


// theres a lot going on here, lets break it down.
// We reference our button with the id of "button-1".
// We then attach an event listner that listens for a "click" from the user. The user must click on this specific button for
// anything to happen. The event listener only exists where we tell it to.
// After we say, "listen for a click on this button" we tell our event listener what to do when a user clicks on that button.
// To do this we need to add a function that will run everytime that button is clicked.
// We set the function to return a console.log saying "I have been clicked!". everytime a user clicks that button
// You may also notice the function doesn't have a name. This is called an anonymous function and is generally only used in specific
// instances, like this one.

// lets do something with our other button. Lets make it display whatever is typed in our textarea somewhere on our webpage.
// Remember using the .textContent property before? We can also use it to see what text is in an element. Like So.
// Uncomment the code below:

// console.log(btn.textContent);


// In the console we can see the text we put inside our second button.

// Now lets ramp things up. We are going to create an element to hold our text to display to the user.
// Uncomment the code below:

// var displayEl = document.createElement("p");
// displayEl.setAttribute("id", "display");
// document.body.appendChild(displayEl);


// You wont see that element on your webpage because we havent added any content to it.

// Lets add an event listener to our seconde button that gets the text in our textarea.
// for this we need to use the ".value" property since we are getting it from a textArea, and the content can constantly change
// and puts it in our newly created p tag.

// btn.addEventListener("click", function() {
//     var text = txtArea.value;
//     console.log(text);
//     displayEl.textContent = text;
//     return
// });

// Now type some words in our text area and press our second button to see our text displayed!

// This is only scratching the surface of what Web API's can do. Now that you have a fundamental understanfing of how to
// use web API's start experimenting on your own. See what you can do, as well as what you CAN'T do.
// Happy coding!