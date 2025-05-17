'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


function confirmCall() {
  let phoneNumber = "+1234567890"; // Replace with your actual phone number

  Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make this call?",
      icon: "question",
      background: "#FAF3E0", /* Light pink background */
      color: "black", /* Dark pink text */
      confirmButtonColor: "#8a9a5b", /* Pink confirm button */
      cancelButtonColor: "#6c757d", /* Gray cancel button */
      showCancelButton: true,
      confirmButtonText: "Yes, Call Now!",
      cancelButtonText: "No, Cancel",
      customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-confirm-button',
          cancelButton: 'custom-swal-cancel-button'
      }
  }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = "tel:" + phoneNumber;
      }
  });
}



// hero

const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    let index = 0;

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function goToSlide(n) {
        index = n;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    createDots();
    setInterval(nextSlide, 4000); // Auto-scroll every 4s


    //collection

    document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".collection-card");
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.2 }
      );
    
      cards.forEach((card) => observer.observe(card));
    });




    
    // document.addEventListener("DOMContentLoaded", function () {
    //   // Function to check if an element is in the viewport
    //   function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();  //Uses getBoundingClientRect() to check if the element is inside the viewport.
    //     return rect.top >= 0 && rect.bottom <= window.innerHeight;
    //   }
    
    //   const countdownNumbers = document.querySelectorAll('.number');
    
    //   // Loop through each countdown number and trigger animation on scroll
    //   function handleScroll() {
    //     countdownNumbers.forEach(function (number) {
    //       const timeContainer = number.closest('.time');
    //       if (isInViewport(timeContainer) && !timeContainer.classList.contains('scrolled')) {
    //         timeContainer.classList.add('scrolled'); // Trigger the animation
    //         animateNumber(number); // Animate the number to the final value
    //       }
    //     });
    //   }
    
    //   // Function to animate the number (from 0 to its final value)
    //   function animateNumber(number) {
    //     const finalNumber = number.getAttribute('data-number');
    //     let currentNumber = 0;
    
    //     const interval = setInterval(function () {
    //       number.textContent = currentNumber;
    //       if (currentNumber < finalNumber) {
    //         currentNumber++;
    //       } else {
    //         clearInterval(interval); // Stop the interval when the number reaches its target
    //       }
    //     }, 100); // Adjust speed of number increase
    //   }
    
    //   // Trigger scroll event on page load and scroll
    //   window.addEventListener('scroll', handleScroll);
    //   handleScroll();  // Call on page load in case the countdown is already in the viewport
    // });
    


      // Set the countdown target date
  const countdownDate = new Date("2025-05-01T00:00:00").getTime(); // Update this to your desired deadline

  const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

    // If the countdown is finished
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "<p>Offer Expired</p>";
    }
  }, 1000);

  


    
    