// Modal Functionality
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Swiper Functionality
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: true, // Enable loop mode
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true, // Enable mouse wheel control
  grabCursor: true, // Change cursor to grab when hovering over the swiper
});

// Image Toggler
let tabs = document.querySelectorAll(".tab");
let images = document.querySelectorAll(".img");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    setActiveImage(index);
    clearInterval(autoToggle); // Reset the interval to avoid conflict
    autoToggle = setInterval(showNext, 3000); // Restart the interval
  });
});

function setActiveImage(index) {
  images.forEach((content) => {
    content.classList.remove("active");
  });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  images[index].classList.add("active");
  tabs[index].classList.add("active");
}

let currentIndex = 0;

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  setActiveImage(currentIndex);
}

let autoToggle = setInterval(showNext, 3000); // Change every 3 seconds
