function fetchApi() {
  const userInputValue = document
    .getElementById("userInput")
    .value.toLowerCase();

  const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInputValue}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const pokemonName = response.data.name;
      const pokemonId = response.data.id;
      const pokemonWeight = response.data.weight;
      const pokemonHeight = response.data.height;
      const pokemonImage = response.data.sprites.front_shiny;
      const pokemonType = response.data.types[0].type.name;
      const pokemonHp = response.data.stats[0].base_stat;
      const pokemonAttack = response.data.stats[1].base_stat;
      const pokemonDefence = response.data.stats[2].base_stat;
      const pokemonSpAttack = response.data.stats[3].base_stat;
      const pokemonSpDefence = response.data.stats[4].base_stat;
      const pokemonSpeed = response.data.stats[5].base_stat;

      // // Log the details
      // console.log("Name:", pokemonName);
      // console.log("ID:", pokemonId);
      // console.log("Weight:", pokemonWeight);
      // console.log("Height:", pokemonHeight);
      // console.log("Image:", pokemonImage);
      // console.log("Type:", pokemonType);
      // console.log("HP:", pokemonHp);
      // console.log("Attack:", pokemonAttack);
      // console.log("Defence:", pokemonDefence);
      // console.log("Sp. Attack:", pokemonSpAttack);
      // console.log("Sp. Defence:", pokemonSpDefence);
      // console.log("Speed:", pokemonSpeed);

      console.log("Data:", response.data);

      // store above data in this functtion
      renderPokemonDetails(
        pokemonName,
        pokemonId,
        pokemonWeight,
        pokemonHeight,
        pokemonImage,
        pokemonType,
        pokemonHp,
        pokemonAttack,
        pokemonDefence,
        pokemonSpAttack,
        pokemonSpDefence,
        pokemonSpeed
      );
    })
    .catch((error) => {
      console.error("Axios error", error);
      alert("Pokemon not found!");
    });
}

function renderPokemonDetails(
  name,
  id,
  weight,
  height,
  img,
  type,
  hp,
  attack,
  defence,
  spAttack,
  spDefence,
  speed
) {
  document.getElementById("name").innerHTML = `${name} <span>#${id}</span>`;
  document.getElementById("weight").innerHTML = `${weight}`;
  document.getElementById("height").innerHTML = `${height}`;
  document.getElementById("image").src = `${img}`;
  document.getElementById("types").innerHTML = `${type}`;
  document.getElementById("hp").innerHTML = `${hp}`;
  document.getElementById("attack").innerHTML = `${attack}`;
  document.getElementById("defence").innerHTML = `${defence}`;
  document.getElementById("special-attack").innerHTML = `${spAttack}`;
  document.getElementById("special-defence").innerHTML = `${spDefence}`;
  document.getElementById("speed").innerHTML = `${speed}`;
}
