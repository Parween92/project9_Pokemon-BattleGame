import express from "express";
import chalk from "chalk";
import cors from "cors";
import mongoose from "mongoose";

import errorHandler from "./middleware/errorhandler";
import ErrorResponse from "./utils/ErrorResponse";

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

//Fallback für ungültige oder nicht existierende Routen
app.use("*", (req, res, next) => {
  next(new ErrorResponse(`Check route. You used ${req.originalUrl}`, 404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    chalk.bgGreen(` Personal Library API listening on port ${port} `)
  );
});
