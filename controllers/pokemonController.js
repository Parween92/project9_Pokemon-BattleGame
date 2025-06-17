import Pokemon from "../models/Pokemon.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const getRandomPokemon = async (req, res) => {
  // Hier müssen die Anzahl der  Pokémon in der MongoDB-Collection zählen
  const count = await Pokemon.countDocuments();
  if (count === 0) throw new ErrorResponse("No Pokémon found", 404);

  // random Index
  const randomIndex = Math.floor(Math.random() * count);

  // Ein Pokémon zufällig holen
  const randomPokemon = await Pokemon.findOne().skip(randomIndex);

  res.json(randomPokemon);
};

export default getRandomPokemon;
