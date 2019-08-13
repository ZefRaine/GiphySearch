 gifButtons = ["iron man", "spongebob", "pancakes"];

 // This .on("click") function will trigger the AJAX Call
 function renderButtons() {
   document.getElementById("buttons-view").innerHTML = "";

   // Looping through the array of gifButtons
   for (let i = 0; i < gifButtons.length; i++) {

     // Then dynamicaly generating buttons for each movie in the array.
     const a = document.createElement("button");
     // Adding a class
     a.classList.add("gifButtons");
     // Adding a data-attribute with a value of the movie at index i
     a.setAttribute("data-name", gifButtons[i]);
     // Providing the button's text with a value of the movie at index i
     a.innerHTML = gifButtons[i];
     // Adding the button to the HTML
     document.getElementById("buttons-view").append(a);
   }
 }
 renderButtons();
 document.getElementById("add-gif").addEventListener("click", function (event) {
   event.preventDefault();

   // Here we grab the text from the input box
   const gif = document.getElementById("giphy-input").value;
   const giphyAPI = "?api_key=cLyoTr0FTNVeAUK0vFm01tASTz7txHt1"

   // Here we construct our URL
   const queryURL = "https://api.giphy.com/v1/gifs/search" + giphyAPI + "&q=" + gif + "&limit=10&offset=0&rating=PG&lang=en";

   fetch(queryURL).then(function (response) {
     return response.json()
   }).then(function (responseJson) {
     console.log(queryURL);
     console.log(responseJson);
     const results = responseJson.data;
     for (var i = 0; i < responseJson.data.length; i++) {
       const p = document.createElement("p");
       const stillGif = results[i].images.fixed_height_still.url;
       const animatedGif = results[i].images.fixed_height.url;
       p.innerHTML = "Rating: " + results[i].rating;
       const giphy = document.createElement("img");
       giphy.setAttribute("src", stillGif);
       giphy.setAttribute("data-animate", animatedGif);
       giphy.setAttribute("data-still", stillGif);
       giphy.setAttribute("data-state", "still");
       gifview.append(p);
       gifview.append(giphy);
       giphy.addEventListener("click", function (event) {
         const state = event.target.getAttribute("data-state");

         if (state === "still") {
           event.target.setAttribute("src", event.target.getAttribute("data-animate"));
           event.target.setAttribute("data-state", "animate");
         } else {
           event.target.setAttribute("src", event.target.getAttribute("data-still"));
           event.target.setAttribute("data-state", "still");
         }
       })
     }

   });
 });