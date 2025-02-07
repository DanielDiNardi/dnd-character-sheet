function createOverlay(event) {
    // creating overlay elements
    const background = createElement("div", {
        id: "background",
        onclick: "closeOverlay()",
    });
    const modal = createElement("div", {
        id: "modal",
    });
    const modalContent = createElement("div", {
        id: "modal_content",
    });
    const closeButton = createElement("button", {
        class: "close_button",
        innerText: "X",
        onclick: "deleteOverlay()",
    });

    // set up modal
    const body = document.getElementsByTagName("body")[0];

    body.append(background);
    background.append(modal);

    // add elements to modal
    modal.append(modalContent);
    modal.append(closeButton);

    // stops modal from closing overlay when clicked
    modal.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // checks which overlay to create
    if (
        event.target.attributes.getNamedItem("data-type").value === "add-spell"
    ) {
        modalContent.append(setupAddSpellsModal());
    }
}

function deleteOverlay() {
    document.getElementById("background").remove();
}

function setupAddSpellsModal() {
    return createElement("div", { id: "add_spells_modal" });
}
