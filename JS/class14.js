const apiUrl = " https://pokeapi.co/api/v2/pokemon/";
const pokeId = $("#pokemonId");

const renderData = (pokemon) => {
    const pokedex = $("#pokeDex");
    pokedex.prepend(`
                     <div class="card pokecard" style="width: 20rem;">
                         <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <ul>
                            <li><strong>Pokemon Number:</strong> ${pokemon.id}</li>
                            <li><strong>Height:</strong> ${pokemon.height}</li>
                            <li><strong>Weight:</strong> ${pokemon.weight}</li>
                        </ul>
                        </div>
                    </div>
  `);

}

const getData = (valorIdPokemon) => {
    $.ajax({
        method: "GET",
        url: apiUrl + `${valorIdPokemon}`,
        success: (response) => {
            console.log(response);
            renderData(response);
        },
        error: () => {
            alert("algo salio mal")
        }
    })

}
//$(document).ready(function () {
//  getData();
//});


$("#renderPokemon").click(() => {
    let valorIdPokemon = Number(pokeId[0].value);
    console.log(valorIdPokemon);
    if (Number.isInteger(valorIdPokemon) && valorIdPokemon > 0 && valorIdPokemon < 899) {
        getData(valorIdPokemon);
    }
    else {
        alert('Debe ser un entero entre 1 y 898')
    }

})



