const all_spells = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
};

//Gets all spells
fetch("https://www.dnd5eapi.co/api/spells", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => response.json())
    .then((data) => {
        for (spell of data.results) {
            all_spells[spell.level].push(spell);
        }

        GenerateButtons(1, "Spell List", "spell-list", {
            onclick: "openOverlay(event)",
        });
    })
    .catch((error, response) => {
        console.error("Error in getSpells.js: ", error);
    });
