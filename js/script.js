// Mobile Menu Toggle
const navToggle = document.getElementById("navToggle")
const mobileMenu = document.getElementById("mobileMenu")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    navToggle.classList.remove("active")
    mobileMenu.classList.remove("active")
  }
})

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]')
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header shadow on scroll
const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)"
  } else {
    header.style.boxShadow = "none"
  }
})


const swiper = new Swiper('.services-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 800,
    

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
