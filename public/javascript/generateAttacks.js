
// Generates buttons for the attack roll and damage roll 
// from the character data
function Attacks(characterData){
    console.log(characterData);

    for(let index = 1; characterData[`weapon-attack-bonus-${index}`] !== undefined; index++){
        var attackModifier = GetValues(characterData[`weapon-attack-bonus-${index}`], "+");
        console.log(attackModifier);
    
        // IMPORTANT - DO NOT REMOVE
        var damageQuantitySplitArray = characterData[`weapon-damage-${index}`].split("d");
        var damageSplitArray = damageQuantitySplitArray[1].split("+");
    
        var damageQuantity = GetValues(characterData[`weapon-damage-${index}`], "+");
        console.log(damageQuantity);
    
        var damage = GetValues(damageQuantitySplitArray[1], "+");
        console.log(damage);
    
        var damageModifier = GetValues(damageSplitArray[1], " ");
        console.log(damageModifier);

        // Move this into a new generateButtons JavaScript file
        const attackButtonElement = document.createElement("button");
        const damageButtonElement = document.createElement("button");

        attackButtonElement.id = `attack-button-${index}`;
        damageButtonElement.id = `damage-button-${index}`;

        attackButtonElement.setAttribute("onclick", "Roll()");
        damageButtonElement.setAttribute("onclick", `Roll(${damage})`);

        attackButtonElement.innerHTML = "Roll Attack for " + characterData[`weapon-name-${index}`];
        damageButtonElement.innerHTML = "Roll Damage for " + characterData[`weapon-name-${index}`];

        document.getElementById("attack-buttons").append(attackButtonElement);
        document.getElementById("attack-buttons").append(damageButtonElement);
    }
}

// Gets attack and damage values from the character data
function GetValues(array, splitValue) {
    var splitArray = array.split(splitValue);

    splitArray = splitArray.filter((value) => value != "");

    var splitArrayString = splitArray[0];
    
    return parseInt(splitArrayString);
}