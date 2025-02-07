
// Generates buttons for the attack roll and damage roll 
// from the character data
function Attacks(characterAttacks){
    console.log(characterAttacks);

    for(let index = 1; characterAttacks[`weapon-attack-bonus-${index}`] !== undefined; index++){
        var attackModifier = GetValues(characterAttacks[`weapon-attack-bonus-${index}`], "+");
        console.log(attackModifier);
    
        // IMPORTANT - DO NOT REMOVE
        var damageQuantitySplitArray = characterAttacks[`weapon-damage-${index}`].split("d");
        var damageSplitArray = damageQuantitySplitArray[1].split("+");
    
        var damageQuantity = GetValues(characterAttacks[`weapon-damage-${index}`], "+");
        console.log(damageQuantity);
    
        var damage = GetValues(damageQuantitySplitArray[1], "+");
        console.log(damage);
    
        var damageModifier = GetValues(damageSplitArray[1], " ");
        console.log(damageModifier);

        GenerateButtons(index, damage, characterAttacks[`weapon-name-${index}`], 'attack');
        GenerateButtons(index, damage, characterAttacks[`weapon-name-${index}`], 'damage');
    }
}

// Gets attack and damage values from the character data
function GetValues(array, splitValue) {
    var splitArray = array.split(splitValue);

    splitArray = splitArray.filter((value) => value != "");

    var splitArrayString = splitArray[0];
    
    return parseInt(splitArrayString);
}