function closePopup() {
    document.getElementById("introPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", closePopup);
    }
});

function clickedMe() {
    let objectClicked = document.getElementById('clickable');
    objectClicked.classList.add('purple');
}

function pageLocation(page) {
    window.location.href = page + ".html";
}

function switchFloor(floor) {
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
        buttons[0].classList.add("active");
    }

    if (floor === "second") {
        document.getElementById("secondFloorMap").classList.add("activeMap");
        buttons[1].classList.add("active");
    }

    if (floor === "third") {
        document.getElementById("thirdFloorMap").classList.add("activeMap");
        buttons[2].classList.add("active");
    }

    closeMapCard();
}

const mapLocations = {
    xrStage: {
        title: "XR Stage",
        description: "This highlighted space marks the XR Stage area on the first floor. Use this to showcase immersive projects, demos, or featured student work."
    },
    secondHall: {
        title: "Second Floor Hall Space",
        description: "This second floor highlighted section can be used for a key hallway exhibit area, welcome zone, or featured project section."
    },
    studioSpace: {
        title: "Second Floor Studio Space",
        description: "This marked room on the second floor can represent a student showcase room, project table area, or interactive media display."
    },
    xrStageThird: {
        title: "Third Floor XR Stage",
        description: "This third floor XR Stage marker points to another major showcase location. You can use this for expanded exhibits or special presentations."
    },
    projectArea: {
        title: "Third Floor Project Area",
        description: "This highlighted section can be used for individual student booths, capstone displays, or smaller presentation spaces."
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