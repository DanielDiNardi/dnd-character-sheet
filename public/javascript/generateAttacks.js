// Generates buttons for the attack roll and damage roll
// from the character data
function Attacks(characterAttacks) {
    for (
        let index = 1;
        characterAttacks[`weapon-attack-bonus-${index}`] !== undefined;
        index++
    ) {
        var attackModifier = GetValues(
            characterAttacks[`weapon-attack-bonus-${index}`],
            "+"
        );

        // IMPORTANT - DO NOT REMOVE
        var damageQuantitySplitArray =
            characterAttacks[`weapon-damage-${index}`].split("d");
        var damageSplitArray = damageQuantitySplitArray[1].split("+");

        var damageQuantity = GetValues(
            characterAttacks[`weapon-damage-${index}`],
            "+"
        );

        var damage = GetValues(damageQuantitySplitArray[1], "+");

        var damageModifier = GetValues(damageSplitArray[1], " ");

        GenerateButtons(index, {
            name: characterAttacks[`weapon-name-${index}`],
            type: "attack",
        });
        GenerateButtons(index, {
            max: damage,
            name: characterAttacks[`weapon-name-${index}`],
            type: "damage",
        });
    }
}

// Gets attack and damage values from the character data
function GetValues(array, splitValue) {
    var splitArray = array.split(splitValue);

    splitArray = splitArray.filter((value) => value != "");

    var splitArrayString = splitArray[0];

    return parseInt(splitArrayString);
}
