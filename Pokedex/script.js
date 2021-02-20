const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
// map with our types and corresponding colors
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// array of all types are returned
const main_types = Object.keys(colors);

// iteratively call our fetch function
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // headers not required
  const res = await fetch(url);
  const data = await res.json();
  // generate div card
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  // create new DOM node
  const pokemonEl = document.createElement("div");
  // append pokemon class in order to use our custom css
  pokemonEl.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // pads the string with 0 up until the string reaches the length defined in the first argument
  const id = pokemon.id.toString().padStart(3, "0");
  const poke_types = pokemon.types.map((type) => type.type.name);
  // if the index of it is greater than -1 it means it exist if our main type array, validating it is indeed a valid type
  // find returns the first instance where the type is a type that exist in our main types map
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  // setting style property of our DOMnode to our value returned from our .find
  pokemonEl.style.backgroundColor = color;

  // templating out div not too different from react/vue
  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
    </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
