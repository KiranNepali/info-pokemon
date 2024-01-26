const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchApi = () => {
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Data:", response.data);
    })
    .catch((error) => {
      console.error("Axios error", error);
    });
};
fetchApi();
