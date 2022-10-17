$(document).ready(function() {
    $('#search-btn').click(function() {
        let movieName = $('#movie-name').val();
        let searchBtn = document.getElementById("search-btn");
        let choise = $(".choise:checked").val();
        let url = 'http://www.omdbapi.com/';
        apiKey = "cf6c42d4";
        $.ajax(url, {
            type: 'GET',
            data: {
                s: movieName,
                i: '',
                apikey: apiKey,
                type: choise
            },
            success: function (data, status, xhr) {
                innerMovies (data);
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage)
            }
        });
        function innerMovies (data) {
            let items = data.Search;
            let newTag = document.createElement('div');
            let main  = document.querySelector('main');
            document.body.append(newTag);
                items.forEach(function (value) {
                newTag.insertAdjacentHTML(
                    'afterend',
                    `<div class="items">
                        <div class="year">${value.Year}</div>
                        <div class="title">${value.Title}</div>
                        <img class="poster" src="${value.Poster}"</img>
                        </div>`
                );
            });
        };
    });
});​