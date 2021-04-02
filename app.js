


//$(document).ready(function(){
   
    //var data = [["City 1", "City 2", "City 3"],
    //["New York", "LA", "Seattle"]]
    //var table = makeTable($(document.body), data);
    //return table;
//});

function movieTable(){
    
}
//$(function(){
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
                    <div style="color:red">Title: ${el.title}</div>
                    <div>Director: ${el.director}</div>
                    <div>Genre: ${el.genre}</div>
                    <button onClick="editMovie(${el.movieId})">CLick me!</button>
                    </div><br>`)
            })
        }
    })
//})
function populateTable(){
    $("#movies").html("")
    $.get("https://localhost:44347/api/Film/", function(data){
        console.log(data);

        $.each(data, function(index, el){
            $("#movies").append(`<div>
                <div>${index}</div>
                <div style="color:red">Title: ${el.title}</div>
                <div>Director: ${el.director}</div>
                <div>Genre: ${el.genre}</div>
                <button onClick="editMovie(${el.movieId})">CLick me!</button>
                </div><br>`)
        })
       
    }).fail(function(err){
        console.log(err)
    })
}
function makeTable(container, data){
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c){
            row.append($("<t"+(rowIndex == 0 ?
                "h" : "d") + "/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}
