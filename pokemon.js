$(document).ready(function(){

    for(var i = 1; i < 152; i++){
        $("#container").append(`<img src="https://pokeapi.co/media/img/${i}.png" id="${i}" alt="pokemon" width="60">`);
    }

    $("img").click(function(){
        var id = $(this).attr('id');
        // alert(id);
        $.get(`http://pokeapi.co/api/v1/pokemon/${id}/`, function(result) {
            console.log(result);
            alert(result.name);
            $('#stat').html(`
                <h2>${result.name}</2>
                <img src="https://pokeapi.co/media/img/${id}.png" alt="number ${id}" width="60">
                <h3>Type</h3>
                <ul>
                    <li>${result.name}</li>
                    <li>${result.name}</li>
                </ul>
            `);
        }, "jsonp");      
    });

});