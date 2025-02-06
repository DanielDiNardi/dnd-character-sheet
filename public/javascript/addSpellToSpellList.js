var selected_spells_list = {
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
var spells_to_remove = {
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

function addSpell(event) {
    fetch("/character/getCharacterSpells", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const character_spells = data;

            var selected_spell_p_elements = document.querySelectorAll(
                "#spell-display > div > p"
            );

            selected_spell_p_elements.forEach((spell) => {
                spell.remove();
            });

            Object.entries(all_spells).forEach(([level, spells]) => {
                spells.forEach((spell) => {
                    if (spell.index === event.target.id) {
                        var isSpellSelected =
                            !character_spells[level].find(
                                (item) => item.index === spell.index
                            ) &&
                            !selected_spells_list[level].find(
                                (item) => item.index === spell.index
                            );

                        if (isSpellSelected) {
                            selected_spells_list[level].push(spell);
                        } else {
                            // TODO: ADD USER MESSAGE THAT SPELL IS ALREADY ADDED
                            console.log("already added that spell");
                        }

                        displaySelectedSpells();
                    }
                });
            });
        })
        .catch((error, response) => {
            console.error("Error in spellOverlaySetup.js: ", error);
        });
}

function removeSpell(event) {
    fetch("/character/getCharacterSpells", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Removing spell...");

            const character_spells = data;

            var spell_button_id = event.target.id.split("display-")[1];
            document.getElementById(spell_button_id).setAttribute("class", "");

            Object.entries(all_spells).forEach(([level, spells]) => {
                spells.forEach((spell) => {
                    if (spell.index === spell_button_id) {
                        if (
                            character_spells[level].find(
                                (item) => item.index === spell.index
                            )
                        ) {
                            spells_to_remove[level].push(spell);
                        } else if (
                            selected_spells_list[level].find(
                                (item) => item.index === spell.index
                            )
                        ) {
                            spells_to_remove[level].push(spell);
                        } else {
                            console.log("Spell not found...");
                        }
                    }
                });
            });

            document.getElementById(event.target.id).remove();
        })
        .catch((error, response) => {
            console.error("Error in spellOverlaySetup.js: ", error);
        });
}
