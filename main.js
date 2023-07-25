

const quote = document.getElementById("quote"); // we have created id name for quote and athor name and here we are accessing the by ids only.
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);  //this codeline will display the contents stored in the API in variable named: "data" on the console of the browser ,
    //WHENEVER this function is called: getquote(url)


    // Now we have removed the console.log line because now our quote data will be displaye on the web browser and not on the browser console. 
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url);  