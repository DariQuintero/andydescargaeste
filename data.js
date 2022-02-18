// estas funciones son de ejemplo
import data from "./data/pokemon/pokemon.js";
// Importamos los datos de el archivo de la carpeta de pokemon
import {
  renderPokemonCard
}
  //generamos una variable vacía

  from "./components.js";


export const renderListOfPokemon = () => {
  const pokemonList = document.getElementById("pokemon-list");
  const pokemon = data.pokemon;

  const pokemonListHTML = pokemon.map((pokemon) => {
    const pokemonCardHTML = renderPokemonCard(pokemon);
    return pokemonCardHTML;
  }

    //Función para que se presenten los pokemones en una lista

  ).join("\n");
  pokemonList.innerHTML = pokemonListHTML;
}

  ;

export const getPokemonByNum = (num) => {
  return data.pokemon.find((pokemon) => {
    return pokemon.num === num;
  }

  );
}

  ;