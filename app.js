
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
    location.reload();



}
function putInfo(id){
    let movieId = id;
    let title = prompt("Title: ");
    let genre = prompt("Genre: ");
    let director = prompt("Director: ")
    processPutForm(movieId, title, genre, director);
}

function processPutForm(id, title, genre, director){
    $.ajax({
        url: "https://localhost:44347/api/Film/" + id,
        contentType: 'application/json',
        data: JSON.stringify({"id": id, "title": title, "genre": genre, "director": director}),
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'text',
        type: 'PUT',
        success: function(){
            location.reload();
            
        }
        
    })
}


function deleteRow(id){
   
$.ajax({
        
        url: "https://localhost:44347/api/Film/" + id,
        contentType: 'application/json',
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'json',
        type: 'DELETE',
        success: function(){
            location.reload()
        }
        
})
}
function getAll(){
    $.ajax({
    url: "https://localhost:44347/api/Film/",
contentType: 'application/json',
data: JSONObject = {"Movie": "Title, Genre, Director, ID"},
headers: {'Access-Control-Allow-Origin': '*'},
dataType: 'json',
type: 'GET',
success: function(data){
    var movies = data;
    buildTable(movies);
}
})
}
function buildTable(data){
    //var table = document.getElementById(movieTable)
    
    for(var i = 0; i <data.length; i++){
        var movieId = data[i].id
        var row = (`<tr id = ${movieId}> 
            <td> ${data[i].title} </td>
            <td> ${data[i].genre} </td>
            <td> ${data[i].director} </td>
            <td> <button class="delete" onclick="deleteRow(${movieId})">Delete</button> | <button class="edit" onclick="putInfo(${movieId})">Edit</button> </td>
            
            </tr>`);

            

            
            $('#movieTable').append(row);
            
    }
    
}

function searchBy(){
    let movies = [];
    let searchItem = document.getElementById("searchBar");
    let parameter = document.getElementById("searchType");
    $.ajax({
        url: "https://localhost:44347/api/Film/",
    contentType: 'application/json',
    data: JSONObject = {"Movie": "Title, Genre, Director, ID"},
    headers: {'Access-Control-Allow-Origin': '*'},
    dataType: 'json',
    type: 'GET',
    success: function(data){
        movies = data;
    }
    })
    
    switch(parameter){
        case parameter == "title":
            var results = movies.filter(function(el){
                if(searchItem == el.title){
                    return true;
                }
                else{
                    return false;
                }
                
            })
            alert(results);
            break;
        case parameter == "genre":
            var results = movies.filter(function(el){
                if(searchItem == el.genre){
                    return true;
                }
                else{
                    return false;
                }
               
            })
            alert(results);
            break;
        case parameter == "director":
            var results = movies.filter(function(el){
                if(searchItem == el.director){
                    return true;
                }
                else{
                    return false;
                }
                
            })
            alert(results);
            break;
    }
    
    
    
    
}

















