import Leaderboard from "../models/Leaderboard.js";
import leaderboardSchema from "../zod-schemas/leaderboard.schema.js";

const getLeaderboard = async (req, res) => {
  const scores = await Leaderboard.find().sort({ score: -1 });
  res.json({ data: scores });
};

const createScore = async (req, res) => {
  const validatedData = leaderboardSchema.parse(req.body);

  const newScore = await Leaderboard.create(validatedData);
  res.status(201).json({ data: newScore });
};

export { getLeaderboard, createScore };
