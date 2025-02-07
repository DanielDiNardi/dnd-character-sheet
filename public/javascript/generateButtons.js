
// Generate HTML Button elements onto the webpage
function GenerateButtons(index, max = 20, name, type){

    // type = "ability", "attack", "skill", "damage"
    // name = "acrobatics", "Spear", "strength"
    // <button data-type="ability" data-ablilties="str" onclick="Roll()">Roll Strength</button>
    // <button data-type="attack" data-attack="spear" onclick="Roll(damage)">Roll Attack for Spear</button>

    const buttonElement = document.createElement("button");

    buttonElement.setAttribute("data-type", type);
    buttonElement.setAttribute(`data-${type}`, name.toLowerCase());
    buttonElement.setAttribute("onclick", `Roll(${max})`);

    var typeCapitalized = type[0].toUpperCase() + type.slice(1);
    
    buttonElement.innerHTML = "Roll " + typeCapitalized + " for " + name;

    document.getElementById(`${type}-buttons`).append(buttonElement);
}