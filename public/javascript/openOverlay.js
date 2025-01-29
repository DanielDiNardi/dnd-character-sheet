async function openOverlay(event) {
    // creating overlay elements
    const background = createElement("div", {
        id: "background",
        onclick: "closeOverlay()",
    });
    const modal = createElement("div", {
        id: "modal",
    });
    const closeButton = createElement("button", {
        class: "close_button",
        innerText: "X",
        onclick: "closeOverlay()",
    });
    const cancelButton = createElement("button", {
        class: "cancel_button",
        innerText: "Cancel",
        onclick: "cancelSelectedSpells()",
    });
    const confirmButton = createElement("button", {
        class: "confirm_button",
        innerText: "Confirm",
        onclick: "confirmSelectedSpells(); closeOverlay()",
    });

    // set up modal
    const body = document.getElementsByTagName("body")[0];

    body.append(background);
    background.append(modal);

    // add elements to modal
    modal.append(closeButton);
    modal.append(cancelButton);
    modal.append(confirmButton);

    // stops modal from closing overlay when clicked
    modal.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    if (event.target.getAttribute("data-type") === "spell-list") {
        await spellOverlaySetup();
    }
}
