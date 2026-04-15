function pageLocation(page) {
    window.location.href = page + ".html";
}

function goInstagram(){
    window.open("https://www.instagram.com/miamioh_etbd/");
}

function goFacebook(){
    window.open("https://www.facebook.com/MiamiOHETBD/");
}

const mapLocations = {
    annas228: {
        title: "Anna's IMS 228",
        description: "Anna's IMS 228 showcase space."
    },
    welcomeTable: {
        title: "Welcome Table",
        description: "Main welcome and check-in table."
    },
    ims452: {
        title: "IMS 452",
        description: "IMS 452 student project showcase."
    },
    ims489: {
        title: "IMS 489",
        description: "IMS 489 presentation area."
    },
    ims440430: {
        title: "IMS 440 + IMS 430",
        description: "Shared room for IMS 440 and IMS 430 projects."
    },
    activityFirst: {
        title: "Activity",
        description: "Interactive activity area on the first floor."
    },
    bvks228: {
        title: "BVK's IMS 228",
        description: "BVK's IMS 228 project area."
    },
    ims317: {
        title: "IMS 317",
        description: "IMS 317 presentation area on the second floor."
    },
    artistAlley: {
        title: "Artist Alley",
        description: "Artist Alley with featured student work and tables."
    },
    ims461: {
        title: "IMS 461",
        description: "IMS 461 project showcase room."
    },
    ims213: {
        title: "IMS 213",
        description: "IMS 213 display area."
    },
    seatingGoodies: {
        title: "Seating / Goodies",
        description: "Small seating and goodies area."
    },
    activity204: {
        title: "Activity 204",
        description: "Interactive activity space near room 204."
    },
    ims487: {
        title: "IMS 487",
        description: "IMS 487 project and presentation space."
    },
    foodDrinks: {
        title: "Food / Drinks",
        description: "Food and drinks station."
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

        if (document.getElementById("list")) {
            render(allStudents);
        }
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });

// student search
const list = document.getElementById("list");
const searchInput = document.getElementById("search");

// Render function
function render(students) {
    if (!list) {
        return;
    }

    list.innerHTML = "";

    const grouped = {};

    students.forEach(student => {
        if (!grouped[student.class]) {
            grouped[student.class] = [];
        }
        grouped[student.class].push(student);
    });

    Object.keys(grouped).forEach(className => {
        const classDiv = document.createElement("div");
        classDiv.className = "class";

        const title = document.createElement("div");
        title.textContent = className;
        title.className = "title";
        classDiv.appendChild(title);

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

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const filtered = allStudents.filter(student =>
            student.name.toLowerCase().includes(value) ||
            student.class.toLowerCase().includes(value) ||
            student.project.toLowerCase().includes(value) ||
            student.location.toLowerCase().includes(value)
        );

        render(filtered);
        console.log("rendering");
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');

    M.Carousel.init(elems, {
        numVisible: 3,
        padding: 20,
        indicators: true
    });
});