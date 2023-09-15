const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.port || 5000;

const recipes = require("./data/recipes.json");

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Chef Hunter is running");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(recipes);
  } else {
    const selectedRecipe = recipes.find((r) => r.id === id);
    res.send(selectedRecipe);
  }
});

app.get("/chefs/:chefID", (req, res) => {
  const chefID = req.params.chefID;
  console.log(chefID);
  if (chefID == 0) {
    res.send(chefs);
  } else {
    const selectedChef = chefs.find((c) => c.chefID === chefID);
    res.send(selectedChef);
  }
});

app.listen(port, () => {
  console.log(`Chef Hunter API is running on port: ${port}`);
});
