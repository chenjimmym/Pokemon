$(document).ready(function(){

    for(var i = 1; i < 152; i++){
        $("#container").append(`<img src="https://pokeapi.co/media/img/${i}.png" id="${i}" alt="pokemon" width="60">`);
    }

    $("img").click(function(){
        var id = $(this).attr('id');
        // alert(id);
        $.get(`http://pokeapi.co/api/v1/pokemon/${id}/`, function(result) {
            // console.log(result);
            var type = '';
            for(var i = 0; i < result.types.length; i++){
                type = type + '<li>' + result.types[i].name + '</li>';
                // console.log('>>>>>>>>' + type);
                // alert(result.types[i].name);    
            }
            $('#stat').html(`
                <h2>${result.name}</2>
                <img src="https://pokeapi.co/media/img/${id}.png" alt="number ${id}" width="60">
                <h3>Type</h3>
                <ul>
                    ${type}
                </ul>
                <h3>Height</h3>
                <p>${result.height}</p>
                <h3>Wight</h3>
                <p>${result.weight}</p>
            `);
        }, "jsonp");      
    });

});