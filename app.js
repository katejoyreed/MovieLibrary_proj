


$(document).ready(function(){
  
   
});




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

function processPutForm(id){
    $.ajax({
        url: "https://localhost:44347/api/Film/" + id,
        contentType: 'application/json',
        data: JSON.stringify({"title": $('#title').val(), "genre": $('#genre').val(), "director": $('#director').val()}),
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'json',
        type: 'PUT',
    })
}


