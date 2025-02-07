function createElement(elementName, options) {
    const element = document.createElement(elementName);

    if (options.id) {
        element.setAttribute("id", options.id);
    }
    if (options.innerText) {
        element.innerText = options.innerText;
    }
    if (options.class) {
        element.setAttribute("class", options.class);
    }
    if (options.onclick) {
        element.setAttribute("onclick", options.onclick);
    }

    return element;
}
