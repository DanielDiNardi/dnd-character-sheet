const express = require("express");
const fs = require("fs");

const CharacterRouter = express.Router();

var characterRawData = fs.readFileSync("./characters/Mythia Hernandeya.json");
var character = JSON.parse(characterRawData);

CharacterRouter.get("/", (req, res) => {
    res.json(character);
});

CharacterRouter.patch("/confirmSpells", (req, res) => {
    // console.log(req.body.spells);

    //Edit character sheet with spells
    const character_file = JSON.parse(
        fs.readFileSync("./characters/Mythia Hernandeya.json")
    );
    character_file.character[0].spells = req.body.spells;
    // console.log(typeof character_file);

    fs.writeFileSync(
        "./characters/Mythia Hernandeya.json",
        JSON.stringify(character_file),
        (err) => {
            console.log("Spell Write Error: " + err);
        }
    );

    // console.log(character);
    // const updated_character_file = JSON.parse(
    //     fs.readFileSync("./characters/Mythia Hernandeya.json")
    // );

    res.send(character_file);
});

module.exports = CharacterRouter;
