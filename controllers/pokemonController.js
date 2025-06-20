import axios from "axios";

const getRandomPokemon = async (req, res) => {
  const id = Math.floor(Math.random() * 151) + 1;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;

    const sprite = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const cry = data.cries?.latest || data.cries?.legacy || null;

    res.json({
      id: data.id,
      name: data.name,
      hp: data.stats.find((s) => s.stat.name === "hp")?.base_stat || 40,
      sprite,
      xp: 100,
      cry,
    });
  } catch (err) {
    console.error("❌ Fehler beim Abrufen des Pokémon:", err.message);
    res.status(500).json({ message: "Pokémon konnte nicht geladen werden" });
  }
};

export default getRandomPokemon;