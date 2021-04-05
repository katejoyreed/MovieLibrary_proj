


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
                    </div><br>`)
            })
        }
    })
//}
$(document).ready(function(){
    var rowIdx = 0;
    $('#addBtn').on('click',function(){
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
    $('#tbody').on('click', 'remove', function(){
        var movie = $(this).closest('tr').nextAll();
        movie.each(function(){
            var id = $(this).attr('id');
            var idx = $(this).movies('.row-index').movies('p');
            var dig = parseInt(id.substring(1));
            idx.html(`Row ${dig - 1}`);
            $(this).attr('id',`R${dig - 1}`);
            $(this).closest('tr').remove();
            rowIdx--;
        })
    })

})

$("button").click(function(){
    $.post("https://localhost:44347/api/Film/")
})


