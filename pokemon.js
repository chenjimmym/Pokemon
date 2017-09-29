$(document).ready(function(){

    for(var i = 1; i < 152; i++){
        $("#container").append('<img src="https://pokeapi.co/media/img/' + i + '.png" alt="pokemon" width="60">');
    }
});