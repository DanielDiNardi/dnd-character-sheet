// Generate HTML Button elements onto the webpage
function GenerateButtons(index, name, type, { max = 20, appendToId, onclick }) {
    // type = "ability", "attack", "skill", "damage"
    // name = "acrobatics", "Spear", "strength"
    // <button data-type="ability" data-ablilties="str" onclick="Roll()">Roll Strength</button>
    // <button data-type="attack" data-attack="spear" onclick="Roll(damage)">Roll Attack for Spear</button>

    const buttonElement = document.createElement("button");

    buttonElement.setAttribute("data-type", type);
    buttonElement.setAttribute(`data-${type}`, name.toLowerCase());
    buttonElement.setAttribute("id", index);
    var typeCapitalized = type[0].toUpperCase() + type.slice(1);
    if (type != "spell-list" && type != "spell") {
        buttonElement.setAttribute("onclick", `Roll(${max})`);
        buttonElement.innerHTML = "Roll " + typeCapitalized + " for " + name;
    } else if (type === "spell-list") {
        buttonElement.innerHTML = "Open " + name;
    } else if (type === "spell") {
        buttonElement.innerHTML = name;
    }

    if (appendToId) {
        document.getElementById(appendToId).append(buttonElement);
    } else if (type !== "overlay") {
        document.getElementById(`${type}-buttons`).append(buttonElement);
    }

    if (onclick) {
        buttonElement.setAttribute("onclick", onclick);
    }
}
