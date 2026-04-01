function closePopup() {
    document.getElementById("introPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", closePopup);
    }
});