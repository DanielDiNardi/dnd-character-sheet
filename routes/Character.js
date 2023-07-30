const express = require("express");
const fs = require("fs");

const CharacterRouter = express.Router();

var characterRawData = fs.readFileSync("./characters/Roderick the Reaver.json");
var character = JSON.parse(characterRawData);

CharacterRouter.get('/', (req, res) => {
    res.json(character);
});

module.exports = CharacterRouter;