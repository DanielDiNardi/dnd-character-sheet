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
            var character_and_selected_spells = Object.keys({
                ...character_spells,
                ...selected_spells_list,
            }).reduce((acc, key) => {
                acc[key] = (character_spells[key] || []).concat(
                    selected_spells_list[key] || []
                );
                return acc;
            }, {});

            const spells_to_send = getDifference(
                character_and_selected_spells,
                spells_to_remove
            );

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

                    spells_to_remove = {
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

function getDifference(obj1, obj2) {
    const result = {};

    for (let key = 0; key <= 9; key++) {
        const keyStr = key.toString();
        const arr1 = obj1[keyStr] || [];
        const arr2 = obj2[keyStr] || [];

        // Convert arrays to maps for quick lookup
        const map1 = new Map(arr1.map((item) => [item.index, item]));
        const map2 = new Map(arr2.map((item) => [item.index, item]));

        const diff = [];
        let uniqueIndex = 0;

        // Items in arr1 but not in arr2
        for (const [index, item] of map1.entries()) {
            if (!map2.has(index)) {
                diff.push({ ...item, uniqueIndex: uniqueIndex++ });
            }
        }

        // Items in arr2 but not in arr1
        for (const [index, item] of map2.entries()) {
            if (!map1.has(index)) {
                diff.push({ ...item, uniqueIndex: uniqueIndex++ });
            }
        }

        result[keyStr] = diff;
    }

    return result;
}
