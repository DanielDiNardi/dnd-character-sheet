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

async function setupAddSpellsModal() {
    try {
        const addSpellModalElement = createElement("div", {
            id: "add_spells_modal",
        });
        var spellList = await fetch("https://www.dnd5eapi.co/api/spells", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .catch((error, response) => {
                console.error("Error in modal.js/setupAddSpellsModal: ", error);
            });

        addSpellModalElement.innerText = await spellList;

        return addSpellModalElement;
    } catch (error) {
        addSpellModalElement.innerText = "Error loading data.";

        console.error("Error:", error);

        return addSpellModalElement;
    }
}
