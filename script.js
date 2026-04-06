function closePopup() {
    const popup = document.getElementById("introPopup");
    if (popup) {
        popup.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", closePopup);
    }
});

function pageLocation(page) {
    window.location.href = page + ".html";
}

function switchFloor(floor, buttonElement) {
    const maps = document.querySelectorAll(".mapContainer");
    const buttons = document.querySelectorAll(".floorButton");

    maps.forEach(function (map) {
        map.classList.remove("activeMap");
    });

    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    if (floor === "first") {
        document.getElementById("firstFloorMap").classList.add("activeMap");
    }

    if (floor === "second") {
        document.getElementById("secondFloorMap").classList.add("activeMap");
    }

    if (floor === "third") {
        document.getElementById("thirdFloorMap").classList.add("activeMap");
    }

    if (buttonElement) {
        buttonElement.classList.add("active");
    }

    closeMapCard();
}

const mapLocations = {
    xrStage: {
        title: "XR Stage",
        description: "Featured immersive projects and student XR experiences."
    },
    secondHall: {
        title: "Second Floor Hall",
        description: "A featured project showcase and welcome space."
    },
    studioSpace: {
        title: "Studio Space",
        description: "Student media and design projects displayed here."
    },
    xrStageThird: {
        title: "Third Floor XR Stage",
        description: "Expanded XR demonstrations and showcase projects."
    },
    projectArea: {
        title: "Project Area",
        description: "Student booths and senior capstone displays."
    }
};

function openMapCard(locationKey) {
    const popup = document.getElementById("mapInfoPopup");
    const title = document.getElementById("mapInfoTitle");
    const description = document.getElementById("mapInfoDescription");

    if (popup && title && description && mapLocations[locationKey]) {
        title.textContent = mapLocations[locationKey].title;
        description.textContent = mapLocations[locationKey].description;
        popup.classList.remove("hidden");
    }
}

function closeMapCard() {
    const popup = document.getElementById("mapInfoPopup");
    if (popup) {
        popup.classList.add("hidden");
    }
}