function spellOverlaySetup() {
    // Get spells from character sheet

    const spellButtonDiv = createElement("div", {
        id: "spell-buttons",
    });
    const spellDisplayDiv = createElement("div", {
        id: "spell-display",
    });

    modal.append(spellButtonDiv);
    modal.append(spellDisplayDiv);

    // TODO: MAKE THIS MORE EFFICIENT
    Object.entries(all_spells).forEach(([level, spells]) => {
        switch (level) {
            case "0":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var cantrip_h3 = createElement("h3", {
                    id: level,
                });
                cantrip_h3.innerText = "Cantrips";
                spellButtonDiv.append(div);
                div.append(cantrip_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(cantrip_h3.cloneNode(true));

                break;
            case "1":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var first_level_h3 = createElement("h3", {
                    id: level,
                });
                first_level_h3.innerText = "1st Level";
                spellButtonDiv.append(div);
                div.append(first_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(first_level_h3.cloneNode(true));

                break;
            case "2":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var second_level_h3 = createElement("h3", {
                    id: level,
                });
                second_level_h3.innerText = "2nd Level";
                spellButtonDiv.append(div);
                div.append(second_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(second_level_h3.cloneNode(true));

                break;
            case "3":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var third_level_h3 = createElement("h3", {
                    id: level,
                });
                third_level_h3.innerText = "3rd Level";
                spellButtonDiv.append(div);
                div.append(third_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(third_level_h3.cloneNode(true));

                break;
            case "4":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var forth_level_h3 = createElement("h3", {
                    id: level,
                });
                forth_level_h3.innerText = "4th Level";
                spellButtonDiv.append(div);
                div.append(forth_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(forth_level_h3.cloneNode(true));

                break;
            case "5":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var fifth_level_h3 = createElement("h3", {
                    id: level,
                });
                fifth_level_h3.innerText = "5th Level";
                spellButtonDiv.append(div);
                div.append(fifth_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(fifth_level_h3.cloneNode(true));

                break;
            case "6":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var sixth_level_h3 = createElement("h3", {
                    id: level,
                });
                sixth_level_h3.innerText = "6th Level";
                spellButtonDiv.append(div);
                div.append(sixth_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(sixth_level_h3.cloneNode(true));

                break;
            case "7":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var seventh_level_h3 = createElement("h3", {
                    id: level,
                });
                seventh_level_h3.innerText = "7th Level";
                spellButtonDiv.append(div);
                div.append(seventh_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(seventh_level_h3.cloneNode(true));

                break;
            case "8":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var eight_level_h3 = createElement("h3", {
                    id: level,
                });
                eight_level_h3.innerText = "8th Level";
                spellButtonDiv.append(div);
                div.append(eight_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(eight_level_h3.cloneNode(true));

                break;
            case "9":
                var div = createElement("div", {
                    id: "spells-" + level,
                });
                var ninth_level_h3 = createElement("h3", {
                    id: level,
                });
                ninth_level_h3.innerText = "9th Level";
                spellButtonDiv.append(div);
                div.append(ninth_level_h3);

                var displayDiv = createElement("div", {
                    id: "spells-display-" + level,
                });
                spellDisplayDiv.append(displayDiv);
                displayDiv.append(ninth_level_h3.cloneNode(true));

                break;
            default:
                console.error(
                    `[openOverlay.js] case level ${level} not handled`
                );
        }

        spells.forEach((spell) =>
            GenerateButtons(spell.index, spell.name, "spell", {
                appendToId: "spells-" + spell.level,
                onclick: "addSpell(event)",
            })
        );
    });

    displaySelectedSpells();
}
