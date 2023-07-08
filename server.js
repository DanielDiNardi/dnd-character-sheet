const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

var characterRawData = fs.readFileSync("./characters/Roderick the Reaver.json");
var character = JSON.parse(characterRawData);

app.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(character, null, 4));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});