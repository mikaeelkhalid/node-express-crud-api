import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.get('/health', (req, res) => {
  res.status(200).send('Health check OK');
});

app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port: ${PORT}`));
