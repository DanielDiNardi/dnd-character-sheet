function confirmSelectedSpells() {
    fetch("/character/getCharacterSpells", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const character_spells = data;
            const spells_to_send = Object.keys({
                ...character_spells,
                ...selected_spells_list,
            }).reduce((acc, key) => {
                acc[key] = (character_spells[key] || []).concat(
                    selected_spells_list[key] || []
                );
                return acc;
            }, {});

            Object.entries(spells_to_send).forEach(([level, spells]) => {
                // Sorts selected spells in alphabetical order
                spells_to_send[level].sort((spell_a, spell_b) => {
                    var spell_a_index = spell_a.index;
                    var spell_b_index = spell_b.index;
                    return spell_a_index < spell_b_index
                        ? -1
                        : spell_a_index > spell_b_index
                        ? 1
                        : 0;
                });
            });

            // Update spells in character sheet JSON
            fetch("/character/confirmSpells", {
                method: "PATCH",
                body: JSON.stringify({
                    spells: spells_to_send,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("PATCH spells to character sheet is a success");
                    console.log(data);
                    selected_spells_list = {
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
                })
                .catch((error, response) => {
                    console.error("Error in confirmSelectedSpells.js: ", error);
                });
        })
        .catch((error, response) => {
            console.error("Error in spellOverlaySetup.js: ", error);
        });
}
