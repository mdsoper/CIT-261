// Ajax
// Client and servers
// A client, such as a web browser, will request a resource (usually a web page) from a server, which processes the request and sends back a response to the client.
// fetch api
// this is how we are able to get information from the api to the application.
// basic usage
fetch('https://example.com/data')
// .then( // code that handles the response )
// .catch( // code that runs if the server returns an error )
// response interface
const url = 'https:example.com/data';
fetch(url)
.then((response) => {
if(response.ok) {
return response;
}
throw Error(response.statusText);
})
// .then( response => // do something with response )
// .catch( error => console.log('There was an error!') )
// headers – A Headers object (see later section) containing any headers associated with the response
// url – A string containing the URL of response
// redirected – A boolean value that speci es if the response is the result of a redirect
// type – A string value of “basic”, “cors”, “error” or “opaque”. A value of “basic” is used for a response from the same domain. A value of “cors” means the data was received from a valid cross-origin request from a different domain. A value of “opaque” is used for a response received from “no-cors” request from another domain, which means access to the data will be severely restricted. A value of “error” is used when a network error occurs.
// redirects
// fetch(url)
//  .then( response => response.redirect(newURL)); 
//  // redirects to another URL
//  .then( // do something else )
//  .catch( error => console.log('There was an error: ',
// ➥ error))
// text responses
fetch(url)
 .then( response => response.text() ); // transforms thetext stream into a JavaScript 
 string .then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))
// file response
// fetch(url)
//  .then( response => response.blob() ); // transforms the
// ➥ data into a blob object
// .then( blob => console.log(blob.type) )
// .catch( error => console.log('There was an error: ', ➥ error))
// Json response
// fetch(url)
//  .then( response => response.json() ); // transforms the
// ➥ JSON data into a JavaScript object
// .then( data => console.log(Object.entries(data)) )
// .catch( error => console.log('There was an error: ', ➥ error))
// Creating response objects
const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});
// Request interface
// url – The URL of the requested resource (the only property that is required). method – a string that speci es which HTTP method should be used for the request. By default, this is GET.
// headers – This is a Headers object (see later section) that provides details of the request’s headers.
// mode – Allows you to specify if CORS is used or not. CORS is enabled by default.
// cache – Allows you to specify how the request will use the browser’s cache. For example, you can force it to request a resource and update the cache with the result, or you can force it to only look in the cache for the resource. credentials – Lets you specify if cookies should be allowed with the request. redirect – Speci es what to do if the response returns a redirect. There’s a choice of three values: “follow” (the redirect is followed), “error” (an error is thrown) or “manual” (the user has to click on a link to follow the redirect).
const request = new Request('https://example.com/data', {
method: 'GET',
mode: 'cors',
redirect: 'follow',
cache: 'no-cache'
});
// fetch(request)
// .then( // do something with the response )
// .catch( // handle any errors)
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
// .then( // do something with the response )
// .catch( // handle any errors)
// headers interface
const headers = new Headers();
const headers = new Headers({ 'Content-Type': 'text/plain',
 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })
 headers.has('Content-Type');
// << true
// Putting it all together
// const url = 'https:example.com/data';
//  const headers = new Headers({ 'Content-Type': 'text/plain',
// ➥ 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' ➥ })
// const request = (url,{
// headers: headers
// })
// fetch(request)
// .then( function(response) {
// if(response.ok) {
// return response;
// }
// throw Error(response.statusText);
// })
// .then( response => // do something with response )
// .catch( error => console.log('There was an error!') )
// Receving information
// textButton.addEventListener('click', () => {
//     fetch(textURL)
//     .then( response => {
//     outputDiv.innerHTML = 'Waiting for response...';
//     if(response.ok) {
//     return response;
//     }
//     throw Error(response.statusText);
//     })
//     .then( response => response.text() )
//     .then( text => outputDiv.innerText = text )
//     .catch( error => console.log('There was an error:', ➥ error))
//     },false);
// sending information
// <!doctype html>
// <html lang='en'>
// <head>
// <meta charset='utf-8'>
// <title>To Do List</title>
// </head>
// <body>
//  <form id='todo'
// ➥ action='https://jsonplaceholder.typicode.com/todos' ➥ method='POST'>
// <input type='text' name='task' placeholder='Add Task' ➥ autofocus required>
//     <button type='submit'>Add Task</button>
// </form>
// <script src='main.js'></script>
// </body>
// </html>
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
event.preventDefault();
const number = form.task.value;
const task = {
    userId: 1,
    title: form.task.value,
    completed: false
}
const data = JSON.stringify(task);
const url = 'https://jsonplaceholder.typicode.com/todos';
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});
const request = new Request(url,
{
method: 'POST',
header: headers,
body: data
}
)
fetch(request)
.then( response => response.json() )
.then( task => console.log(`Task saved with an id of ➥ ${task.id}`) )
.catch( error => console.log('There was an error:', error))
}
// A living standard
$.ajax('http://numbersapi.com/random')
.done(text => outputDiv.innerHTML = text );
// Ajax is a technique for sending and receiving data asynchronously in the background.
// The data can be sent in many forms, but it is usually in JSON.
// Ajax can be used for making partial page updates without having to do a full page reload.
// Ajax can be used for communicating with external APIs. Ajax requests can be made using the Fetch API.
// The Response interface allows you to control the response received from a request or to create your own response objects.
// The Request interface allows you to create a request object that contains information about the request being made, such as the URL and headers.
// The Headers interface allows you to create HTTP headers that can be added to a request or response object.
// Requests can retrieve data using a GET request, or send data using a POST request.
// The FormData interface makes it easier to send data from forms.
