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
// const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');


let currentIndex = 0;
let startX = 0;
let isDragging = false;





// function updateCarousel() {
//    const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
//    track.style.transition = 'transform 0.4s ease-in-out';
//    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }




// nextButton.addEventListener('click', () => {
//    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
//    updateCarousel();
// });


// prevButton.addEventListener('click', () => {
//    currentIndex = Math.max(currentIndex - 1, 0);
//    updateCarousel();
// });




// track.addEventListener('touchstart', e => {
//    startX = e.touches[0].clientX;
//    isDragging = true;
//    track.style.transition = 'none';
// });


// track.addEventListener('touchmove', e => {
//    if (!isDragging) return;
//    const deltaX = e.touches[0].clientX - startX;
//    const slideWidth = slides[0].getBoundingClientRect().width + 10;
//    track.style.transform = `translateX(${-currentIndex * slideWidth + -deltaX}px)`;
// });


// track.addEventListener('touchend', e => {
//    if (!isDragging) return;
//    isDragging = false;
//    const deltaX = e.changedTouches[0].clientX - startX;
//    const slideWidth = slides[0].getBoundingClientRect().width + 10;


//    if (deltaX < -50) {
//        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
//    } else if (deltaX > 50) {
//        currentIndex = Math.max(currentIndex - 1, 0);
//    }
//    updateCarousel();
// });




// window.addEventListener('resize', updateCarousel);




// updateCarousel()













let allStudents = [];

fetch("students.json")
    .then(response => response.json())
    .then(data => {
        allStudents = data.students;

        render(allStudents); // initial render
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });
//student search

const list = document.getElementById("list");
const searchInput = document.getElementById("search");

// Render function
function render(students) {
    list.innerHTML = "";

    // Group students by class
    const grouped = {};

    students.forEach(student => {
        if (!grouped[student.class]) {
            grouped[student.class] = [];
        }
        grouped[student.class].push(student);
    });

    // Create a section for each class
    Object.keys(grouped).forEach(className => {
        const classDiv = document.createElement("div");
        classDiv.className = "class";

        // Class title
        const title = document.createElement("div");
        title.textContent = className;
        classDiv.appendChild(title);
        title.className = "title";

        // Students in that class
        grouped[className].forEach(student => {
            const div = document.createElement("div");
            div.className = "student";
            if(student.location == "Artist Alley"){
            div.innerHTML = `
                <div class="artistAlley"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            if(student.location == "XR Stage"){
            div.innerHTML = `
                <div class="xrStage"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            if(student.location == "Refreshments"){
            div.innerHTML = `
                <div class="refreshments"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            if(student.location == "Room203"){
            div.innerHTML = `
                <div class="room203"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            if(student.location == "Room160"){
            div.innerHTML = `
                <div class="room160"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            if(student.location == null){
            div.innerHTML = `
                <div class="other"><strong>${student.name}</strong></div>
                <div>Project: ${student.project}</div>
                <div>Location: ${student.location}</div>
            `;
            }
            classDiv.appendChild(div);
        });

        list.appendChild(classDiv);
    });
}

// Initial render

// Search function
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = allStudents.filter(student =>
        student.name.toLowerCase().includes(value) ||
        student.class.toLowerCase().includes(value) ||
        student.project.toLowerCase().includes(value) ||
        student.location.toLowerCase().includes(value)
    );

    render(filtered);
    console.log('rendering');
});