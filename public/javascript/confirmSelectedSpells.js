function confirmSelectedSpells() {
    // Update spells in character sheet JSON
    fetch("/character/confirmSpells", {
        method: "PATCH",
        body: JSON.stringify({
            spells: selected_spells_list,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("PATCH spells to character sheet is a success");
            console.log(data);
        })
        .catch((error, response) => {
            console.error("Error in confirmSelectedSpells.js: ", error);
        });
}
