function imageModalPop(element) {
    const dialog = document.createElement("div");
    const dialogImage = document.createElement("img");
    dialog.setAttribute("class", "modal");
    dialogImage.setAttribute("class", "image-modal");
    dialog.setAttribute("onclick", "imageModalClose()");
    dialogImage.setAttribute("src", element.src);
    dialog.append(dialogImage);
    document.body.append(dialog);
}
function imageModalClose() {
    const dialog = document.querySelector(".modal");
    document.body.removeChild(dialog);
}