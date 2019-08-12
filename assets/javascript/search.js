// This .on("click") function will trigger the AJAX Call
document.getElementById("find-gif").addEventListener("click", function(event) {
    event.preventDefault();

    // Here we grab the text from the input box
    const gif = document.getElementById("giphy-input").value;
    const giphyAPI = "?api_key=cLyoTr0FTNVeAUK0vFm01tASTz7txHt1"

    // Here we construct our URL
    const queryURL = "https://api.giphy.com/v1/gifs/search" + giphyAPI + "&q=" + gif + "&limit=5&offset=0&rating=PG&lang=en";

    fetch(queryURL).then(function(response) {
      return response.json()
    }).then(function(responseJson) {
        console.log(queryURL);
        console.log(responseJson);
        const results = responseJson.data;
        for (var i = 0; i < responseJson.data.length; i++){
          const p = document.createElement("p")
          p.innerHTML = "Rating: " + results[i].rating;
            const giphy = document.createElement("img");
            giphy.setAttribute("src", results[i].images.fixed_height_still.url);
            gifview.append(p);
            gifview.append(giphy);

        }
      
    });

    // -----------------------------------------------------------------------

  });