let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
key = "cf6c42d4";

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?apikey=${key}&s=${movieName}&page=2`;
    if(movieName.length <= 0){
        result.innerHTML = "<h3 class='msg'>Please enter</h3>"
    }
    else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            innerHTML(data);
            if(data.resp == 'True'){
                result.innerHTML += `
                <h2>${data.Title}</h2>`;
            }
            else {
                result.innerHTML=`<h3 class='msg'>${data.Error}</h3>`
            }
            
        })
        .catch(() => {
            result.innerHTML=`<h3 class='msg'>Error Occured</h3>`
        });
    }
};

searchBtn.addEventListener("click", getMovie)
window.addEventListener("load", getMovie);