


$(document).ready(function(){
  
   
});





//function GetAllMovies(){
    $.ajax({
        url: "https://localhost:44347/api/Film/",
        contentType: 'application/json',
        data: JSONObject = {"Movie": "Title, Genre, Director, ID"},
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'json',
        type: 'GET',
        success: function(data){
            $.each(data, function(index, el){
                $("#movies").append(`<div>
                    <div>${index}</div>
                    <div>Title: ${el.title}</div>
                    <div>Director: ${el.director}</div>
                    <div>Genre: ${el.genre}</div>
                    <button onClick="editMovie(${el.movieId})">Click me!</button>
                    </div><br>`);
            });
        }
    });
//}

$(document).ready(function(){
    $.fn.Movie = function(){
        $("#myform").dform({
            "html" : [{
                "name": "Title",
                "id": "txt-title",
                "caption": "Movie title",
                "type": "text",
                "placeholder": "e.g. Title of the movie"
            },
            {"type": "br"}]

            
        });
    }
    $(".call-btn-text").click(function(){
        $.fn.Movie();
    });
    
});

    $(document).ready(function(){
        $.fn.Movie2 = function(){
            $("#myform").dform({
                "html":[{
                    "name": "Genre",
                    "id": "txt-genre",
                    "caption": "Movie genre",
                    "type": "text",
                    "placeholder": "e.g. Thriller"
                },
            {"type": "br"}
        ]
            });
        }
        $(".call-btn-text").click(function(){
            $.fn.Movie2();
        });
    });
    $(document).ready(function(){
        $.fn.Movie3 = function(){
            $("#myform").dform({
                "html":[{
                    "name": "Director",
                    "id": "txt-director",
                    "caption": "Movie director",
                    "type": "text",
                    "placeholder": "e.g. STINKY Zack Snyder"
                },
            {"type": "br"}
        ]
            });
        }
        $(".call-btn-text").click(function(){
            $.fn.Movie3();
        });
    });

$(document).ready(function() {
    var rowIdx = 0;
    $('#addBtn').on('click',function() {
        $('#tbody').append(`<tr id="R${++rowIdx}"
        <td class="row-index text-center">
        <p>Row ${rowIdx}</p>
        </td>
        <td class="text-center">
        <button class="btn btn-danger remove"
        type="button">Remove</button>
        </td>
        <tr>;`);
    });
    $('#tbody').on('click', 'remove', function() {
        var child = $(this).closest('tr').nextAll();
        child.each(function() {
            var id = $(this).attr('id');
            var idx = $(this).children('.row-index').children('p');
            var dig = parseInt(id.substring(1));
            idx.html(`Row ${dig - 1}`);
            $(this).attr('id',`R${dig - 1}`);
            $(this).closest('tr').remove();
            rowIdx--;
        });
    });

})

$("button").click(function(){
    $.post("https://localhost:44347/api/Film/"),
    {
        
    }
})

function processPostForm(){
    $.ajax({
        url: "https://localhost:44347/api/Film/",
        contentType: 'application/json',
        data: JSON.stringify({"title": $('#title').val(), "genre": $('#genre').val(), "director": $('#director').val()}),
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'json',
        type: 'POST',
        success: function(data){
            $('#postResponse').html(data);
        },
        
       
    });
    $('#postRequest').submit(processPostForm);
}


