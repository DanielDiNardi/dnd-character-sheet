
// Generates buttons for the attack roll and damage roll
// from the character data
function Attacks(characterData){
    console.log(characterData);

    var attackModifierSplitArray = characterData["weapon-attack-bonus-1"].split("+")
    var attackModifierString = attackModifierSplitArray[1];
    var attackModifier = parseInt(attackModifierString);
    console.log(attackModifier);

    var damageQuantitySplitArray = characterData["weapon-damage-1"].split("d");
    var damageQuantityString = damageQuantitySplitArray[0];
    var damageQuantity = parseInt(damageQuantityString);
    console.log(damageQuantity);

    var damageSplitArray = damageQuantitySplitArray[1].split("+");
    var damageString = damageSplitArray[0];
    var damage = parseInt(damageString);
    console.log(damage);


    var damageModifierSplitArray = damageSplitArray[1].split(" ");
    var damageModifierString = damageModifierSplitArray[0];
    var damageModifier = parseInt(damageModifierString);
    console.log(damageModifier);
}

// make function that does the above ^^
