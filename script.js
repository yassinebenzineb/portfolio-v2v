// ===== DOM Elements =====
const header = document.getElementById("header")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// ===== Header Scroll Effect =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// ===== Mobile Menu Toggle =====
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.querySelector(".hamburger").classList.toggle("active")
})

// ===== Close Mobile Menu on Link Click =====
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.querySelector(".hamburger").classList.remove("active")
  })
})

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll("section[id]")

function updateActiveNav() {
  const scrollY = window.scrollY

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"))
        navLink.classList.add("active")
      }
    }
  })
}

window.addEventListener("scroll", updateActiveNav)

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Animate elements on scroll
document.querySelectorAll(".skill-card, .timeline-item, .contact-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  updateActiveNav()
})
