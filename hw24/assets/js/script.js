let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
key = "cf6c42d4";

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieName}`;
    if(movieName.length <= 0){
        result.innerHTML = "<h3 class='msg'>Please enter</h3>"
    }
    else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.Response == "True") {
                result.innerHTML = `
                  <div class="info">
                      <img src=${data.Poster} class="poster">
                      <div>
                          <h2>${data.Title}</h2>
                          <div class="genre">
                              <div>${data.Genre.split(",").join("</div><div>")}</div>
                          </div>
                      </div>
                  </div>
              `;
              }
              //If movie does NOT exists in database
              else {
                result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
              }
            })
        .catch(() => {
            result.innerHTML=`<h3 class='msg'>Error Occured</h3>`
        });
    }
};

searchBtn.addEventListener("click", getMovie)
window.addEventListener("load", getMovie);