
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
function setup(){
    var selectRow = null;
    var keys = ["title","genre","director"];

    function resetValues(title, genre, director){
        forEachInput(function(key){
            $("#"+key).val('');
        });
    }
    function forEachInput(callback){
        for(var i = 0; i <keys.length; i++){
            callback(keys[i]);
        }
    }
}
function createRow(){
    var row = $(".tr_clone").clone()
    var newRow = row.appendTo("table").removeClass("tr_clone").fadeIn(1000);
    forEachInput(function(key){
        newRow.find("."+key).text($("#"+key).val());
    });
    resetValues();
    selectedRow = null;
}
function editRow(row){
    forEachInput(function(key){
        $("#" + key).val(row.find("."+key).text());
    })
    selectedRow = row;
}
$("#display").on("click", function(){
    if(selectedRow === null){
        createRow();
        resetValues();
    }
    else {
        applyValues(selectedRow);
        resetValues();
        selectedRow = null;
    }
});
$("#table").delegate("button").on("click", function(e){
    e.preventDefault();
    if($(e.target).hasClass('edit')){
        editRow($(e.target).parent("td").parent("tr"));
    }
    else {
        $(e.target).parent("td").parent("tr").fadeOut(1000).remove();
    }
});

function deleteRow(){
    var id = $('#data[i]');
$.ajax({
        
        url: "https://localhost:44347/api/Film/" + id,
        contentType: 'application/json',
        headers: {'Access-Control-Allow-Origin': '*'},
        dataType: 'json',
        type: 'DELETE',
        success: function(){
            getAllMovies();
        }
})
}

