function displaySelectedSpells() {
    Object.entries(selected_spells_list).forEach(([level, spells]) => {
        selected_spells_list[level].sort((spell_a, spell_b) => {
            var spell_a_index = spell_a.index;
            var spell_b_index = spell_b.index;
            return spell_a_index < spell_b_index
                ? -1
                : spell_a_index > spell_b_index
                ? 1
                : 0;
        });
        // console.log(spells);
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
}
