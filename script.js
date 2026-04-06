function closePopup() {
    document.getElementById("introPopup").style.display = "none";
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

    buttonElement.classList.add("active");
    closeMapCard();
}

const mapLocations = {
    xrStage: {
        title: "XR Stage",
        description: "This first floor area highlights the XR Stage and featured immersive projects."
    },
    secondHall: {
        title: "Second Floor Hall Space",
        description: "This second floor area can be used for showcase displays, welcome areas, or featured work."
    },
    studioSpace: {
        title: "Second Floor Studio Space",
        description: "This room can represent a project room, studio display, or student exhibit area."
    },
    xrStageThird: {
        title: "Third Floor XR Stage",
        description: "This third floor XR space can be used for expanded demos or major featured projects."
    },
    projectArea: {
        title: "Third Floor Project Area",
        description: "This highlighted space can be used for booths, capstone projects, or student presentations."
    }
};

function openMapCard(locationKey) {
    const popup = document.getElementById("mapInfoPopup");
    const title = document.getElementById("mapInfoTitle");
    const description = document.getElementById("mapInfoDescription");

    title.textContent = mapLocations[locationKey].title;
    description.textContent = mapLocations[locationKey].description;

    popup.classList.remove("hidden");
}

function closeMapCard() {
    document.getElementById("mapInfoPopup").classList.add("hidden");
}