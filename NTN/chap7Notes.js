// event listeners
// attach an event listener to a document that fires when you click anywhere on the page
document.body.addEventListener("click", doSomething);
// adds onclick handeler to a paragraph element
<p onclick="console.log('you clicked me!')">Click me</p>
// cause a message to be logged to the console when the page is clicked
document.onclick = function () { console.log('You clicked on the page!'); }
// attach a event listener to the documents body
document.body.addEventlistenere('Click' ,doSomething);
// making a event listener to for the whole page but this calls back to the funciton to be used anywhere
addEventListener('click', () => alert('you clicked!'));
//named funciton could be declared and the refferenced in the even listener
function doSomething() {
    alert('you clicked');
}
addEventListener('click' ,dosomething);
