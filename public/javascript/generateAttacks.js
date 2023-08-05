
// Generates buttons for the attack roll and damage roll
// from the character data
function Attacks(characterData){
    console.log(characterData);

    var attackModifierSplitArray = characterData["weapon-attack-bonus-1"].split("+")
    console.log(attackModifierSplitArray);
    // console.log(GetValues(characterData["weapon-attack-bonus-1"], "+"));
    var attackModifierString = attackModifierSplitArray[1];
    var attackModifier = parseInt(attackModifierString);
    // console.log(attackModifier);

    // IMPORTANT
    var damageQuantitySplitArray = characterData["weapon-damage-1"].split("d");
    // console.log(GetValues(characterData["weapon-damage-1"], "+"));
    var damageQuantityString = damageQuantitySplitArray[0];
    var damageQuantity = parseInt(damageQuantityString);
    // console.log(damageQuantity);

    // IMPORTANT
    var damageSplitArray = damageQuantitySplitArray[1].split("+");
    // console.log(GetValues(damageQuantitySplitArray[1], "+"));
    var damageString = damageSplitArray[0];
    var damage = parseInt(damageString);
    // console.log(damage);


    var damageModifierSplitArray = damageSplitArray[1].split(" ");
    console.log(GetValues(damageSplitArray[1], " "));
    var damageModifierString = damageModifierSplitArray[0];
    var damageModifier = parseInt(damageModifierString);
    console.log(damageModifier);
}

// make function that does the above ^^
function GetValues(array, splitValue) {
    var splitArray = array.split(splitValue);
    splitArray = splitArray.filter((value) => value != "");
    var splitArrayString = splitArray[0];
    return parseInt(splitArrayString);
}