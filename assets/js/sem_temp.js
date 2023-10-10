"use strict";

/* Common Page Content */
// Header
let header = $(`
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
<a class="navbar-brand" href="index.html">Niko </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="research.html">Research</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Education</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="https://hashnode.com/" target="_blank">Blogs</a></li>
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()">
   </li>
   <div class="bike">
   
 </div>
  </ul>
</div>
</nav>`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
});

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class
$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

//consistent dark mode for page change
if (localStorage.getItem("lightMode") == "dark") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "dark");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.add("dark-theme");
    document.getElementById("dark_toggler").checked = true;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.add("dsc");
  }
} else {
  localStorage.setItem("lightMode", "light");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "hidden");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});

/* Semester Recap Page Content */
// Store Semester Recap data
const sem_temp = [
  {
    event_name: "Chemistry Lab",
    event_type: "Mentorship",
    event_image: "chemistrymentee.jpg",
  },
  {
    event_name: "User Experience",
    event_type: "Summer Research",
    event_image: "uxresearch.jpg",
  },
  {
    event_name: "UX Team",
    event_type: "Happy Hours",
    event_image: "teamcamping.jpg",
  },
  {
    event_name: "Orientation",
    event_type: "Keynote",
    event_image: "groomingspeech.jpg",
  },
  {
    event_name: "Graduation",
    event_type: "Ceremony",
    event_image: "graduation.jpg",
  },
];

// Select content div
const sem_temp_slides = document.querySelector(".sem_temp_slides");

// Function to add the memory pictures
const fillData = () => {
  let output = "";
  sem_temp.forEach(
    ({ event_name, event_type, event_image }) =>
      (output += `
            <div class="sem_temp_slide" style="background-image: url(assets/images/sem/sem1/${event_image});">
                <div class="sem_temp_slideBg" style="background-image: url(assets/images/sem/sem1/${event_image});"></div>
                <div class="sem_temp_slideContent">
                    <span>${event_name}</span>
                    <span>${event_type}</span>
                </div>
            </div>
    `)
  );
  sem_temp_slides.innerHTML = output;
};

fillData();
