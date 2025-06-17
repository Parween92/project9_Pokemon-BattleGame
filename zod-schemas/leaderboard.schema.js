import { z } from "zod/v4";

const leaderboardSchema = z.object({
  username: z
    .string()
    .min(1, "Username darf nicht leer sein")
    .max(30, "Username darf maximal 30 Zeichen lang sein"),

  score: z
    .number()
    .min(0, "Score darf nicht negativ sein")
    .max(100000, "Score ist zu hoch"),

  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Datum muss ein gültiger ISO-Datumsstring sein",
    })
    .transform((val) => new Date(val)),
});
export default leaderboardSchema;
