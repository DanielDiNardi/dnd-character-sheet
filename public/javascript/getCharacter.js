fetch("/character", {
    method: "GET",
    headers: {
        "Content-Type": 'application/json'
    }
})
.then(response => response.json())
.then(data => {

    var dataString = JSON.stringify(data, null, 4);
    var character_dataElement = document.getElementById("character_data");

    character_dataElement.innerHTML = dataString;
})
.catch((error, response) => {
    console.error('Error in getCharacter.js: ', error);
});