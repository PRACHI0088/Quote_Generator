

const quote = document.getElementById("quote"); // we have created id name for quote and author name and here we are accessing them by ids only.
const author = document.getElementById("author");
const api_url = "http://api.quotable.io/random";
async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);  //this codeline will display the contents stored in the API in variable named: "data" on the console of the browser ,
    //WHENEVER this function is called: getquote(url) here "url" is the function parameter.


    // We can remove the console.log line because now our quote data will be displaye on the web browser and it's not needed on the browser console. 
    quote.innerHTML = data.content; //in console we have our quote text in "content" variable.
    author.innerHTML = data.author; //in console we have our author name in "author" variable.
}
getquote(api_url);  // we are calling getquote() function by passing api_url as a parameter.  
