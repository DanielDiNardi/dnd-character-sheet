function displaySelectedSpells() {
    // console.log(selected_spells_list);
    fetch("/character/getCharacterSpells", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const character_spells = data;
            const character_and_selected_spells = Object.keys({
                ...character_spells,
                ...selected_spells_list,
            }).reduce((acc, key) => {
                acc[key] = (character_spells[key] || []).concat(
                    selected_spells_list[key] || []
                );
                return acc;
            }, {});

            const display_spells = getDifference(
                character_and_selected_spells,
                spells_to_remove
            );

            //TODO: Fix displaying removed spells when adding new spells
            Object.entries(display_spells).forEach(([level, spells]) => {
                // Sorts selected spells in alphabetical order
                display_spells[level].sort((spell_a, spell_b) => {
                    var spell_a_index = spell_a.index;
                    var spell_b_index = spell_b.index;
                    return spell_a_index < spell_b_index
                        ? -1
                        : spell_a_index > spell_b_index
                        ? 1
                        : 0;
                });

                // Displays each selected spell element in overlay
                spells.forEach((spell) => {
                    const spell_name = createElement("p", {
                        id: "display-" + spell.index,
                        innerText: spell.name,
                        onclick: "removeSpell(event)",
                    });
                    document
                        .getElementById("spells-display-" + level)
                        .append(spell_name);

                    document
                        .getElementById(spell.index)
                        .setAttribute("class", "disabled");
                });
            });
        })
        .catch((error, response) => {
            console.error("Error in spellOverlaySetup.js: ", error);
        });
}
