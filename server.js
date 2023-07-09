const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

var characterRawData = fs.readFileSync("./characters/Roderick the Reaver.json");
var character = JSON.parse(characterRawData);

app.get('/', (req, res) => {
    // res.header("Content-Type",'application/json');
    // res.send(JSON.stringify(character, null, 4));
    res.sendFile(__dirname + "/public/charactersheet.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});