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
function goInstagram(){
    window.open("https://www.instagram.com/miamioh_etbd/");
}
function goFacebook(){
    window.open("https://www.facebook.com/MiamiOHETBD/");
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
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');


let currentIndex = 0;
let startX = 0;
let isDragging = false;




function updateCarousel() {
   const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
   track.style.transition = 'transform 0.4s ease-in-out';
   track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}




nextButton.addEventListener('click', () => {
   currentIndex = Math.min(currentIndex + 1, slides.length - 1);
   updateCarousel();
});


prevButton.addEventListener('click', () => {
   currentIndex = Math.max(currentIndex - 1, 0);
   updateCarousel();
});




track.addEventListener('touchstart', e => {
   startX = e.touches[0].clientX;
   isDragging = true;
   track.style.transition = 'none';
});


track.addEventListener('touchmove', e => {
   if (!isDragging) return;
   const deltaX = e.touches[0].clientX - startX;
   const slideWidth = slides[0].getBoundingClientRect().width + 10;
   track.style.transform = `translateX(${-currentIndex * slideWidth + -deltaX}px)`;
});


track.addEventListener('touchend', e => {
   if (!isDragging) return;
   isDragging = false;
   const deltaX = e.changedTouches[0].clientX - startX;
   const slideWidth = slides[0].getBoundingClientRect().width + 10;


   if (deltaX < -50) {
       currentIndex = Math.min(currentIndex + 1, slides.length - 1);
   } else if (deltaX > 50) {
       currentIndex = Math.max(currentIndex - 1, 0);
   }
   updateCarousel();
});




window.addEventListener('resize', updateCarousel);




updateCarousel()

window.onload = function () {
    let popup = document.getElementById("introPopup");
    let startButton = document.getElementById("startButton");

    // hide popup if they already closed it before
    if (localStorage.getItem("popupClosed") === "true") {
        popup.style.display = "none";
    }

    // when button is clicked, hide and save state
    startButton.addEventListener("click", function () {
        popup.style.display = "none";
        localStorage.setItem("popupClosed", "true");
    });
};