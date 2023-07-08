var spellArray = [];

function FindSpells(){
    var spellElements = document.getElementsByClassName("spells");

    spellElements.forEach(element => {
        if(element.classList.length === 1){
            FindSpellName(element);
        }
    });

    return spellArray;
}

function FindSpellName(element){
    element.children.forEach(child => {
        if(child.classList.value === "spell pointer"){
            spellArray.push(ExtractSpellName(child, spellArray));
        }
    });
}

function ExtractSpellName(child){
    var firstChild = child.firstChild;
    if (firstChild.children.length > 0) {
        return firstChild.innerHTML.split("</span>")[1];
    }
    else {
        return firstChild.innerHTML;
    }
}

FindSpells();