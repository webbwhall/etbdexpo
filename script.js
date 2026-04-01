function closePopup() {
    document.getElementById("introPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", closePopup);
    }
});
function clickedMe(){
    let objectClicked = document.getElementById('clickable');
    objectClicked.classList.add('purple');
}
function pageLocation(page){
    window.location.href = page + ".html";
}