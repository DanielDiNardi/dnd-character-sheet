const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

// routes
const getCharacterRoute = require("./routes/Character");

app.use("/character", getCharacterRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/charactersheet.html");
})

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});