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

function addSpell(event) {
    // console.log(document.getElementById("spell-display").children);
    // Array.from(document.getElementById("spell-display").children).forEach(
    //     (levelDisplay) => {
    //         console.log(
    //             Array.from(levelDisplay.children).querySelectorAll("p")
    //         );
    //     }
    // );

    var selected_spell_p_elements = document.querySelectorAll(
        "#spell-display > div > p"
    );

    selected_spell_p_elements.forEach((spell) => {
        spell.remove();
    });

    // console.log("Spell Clicked: " + event.target.id);
    Object.entries(all_spells).forEach(([level, spells]) => {
        // console.log(level);

        spells.forEach((spell) => {
            if (spell.index === event.target.id) {
                // console.log(spell);
                if (!selected_spells_list[level].includes(spell)) {
                    selected_spells_list[level].push(spell);
                } else {
                    // TODO: ADD USER MESSAGE THAT SPELL IS ALREADY ADDED
                    console.log("already added spells");
                }

                displaySelectedSpells();
            }
        });
    });

    // console.log(selected_spells_list);
}

function removeSpell(event) {
    // console.log(event.target.id.split("display-"));
    var spell_button_id = event.target.id.split("display-")[1];
    document.getElementById(spell_button_id).setAttribute("class", "");

    Object.entries(all_spells).forEach(([level, spells]) => {
        // console.log(level);

        spells.forEach((spell) => {
            if (spell.index === spell_button_id) {
                // console.log(spell);
                var selected_spell_index =
                    selected_spells_list[level].indexOf(spell);
                // console.log(spells.indexOf(spell));

                if (selected_spell_index != -1) {
                    selected_spells_list[level].splice(selected_spell_index, 1);
                }
            }
        });
    });

    document.getElementById(event.target.id).remove();

    // console.log(selected_spells_list);
}
