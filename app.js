// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Load dynamic data when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadServices();
  loadPortfolio();
  loadContactInfo();
  handleContactForm();
  initScrollEffects();
});

// Load services from LinkedIn data
function loadServices() {
  const container = document.getElementById("experience-container");
  if (!container || !linkedInData || !linkedInData.services) return;

  linkedInData.services.forEach((service) => {
    const item = document.createElement("div");
    item.className = "item";

    const title = document.createElement("h4");
    title.textContent = service.title;

    const company = document.createElement("span");
    company.className = "company";
    company.textContent = service.company;

    const periodo = document.createElement("span");
    periodo.className = "periodo";
    periodo.textContent = service.period;

    const description = document.createElement("ul");
    service.description.forEach((desc) => {
      const li = document.createElement("li");
      li.textContent = desc;
      description.appendChild(li);
    });

    item.appendChild(title);
    item.appendChild(company);
    item.appendChild(periodo);
    item.appendChild(description);
    container.appendChild(item);
  });
}

// Load portfolio projects
function loadPortfolio() {
  const container = document.getElementById("portfolio-container");
  if (!container || !linkedInData) return;

  linkedInData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "proyecto";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.name;

    const info = document.createElement("div");
    info.className = "info-proyecto";

    const title = document.createElement("h3");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technologies = document.createElement("div");
    technologies.className = "technologies";
    project.technologies.forEach((tech) => {
      const badge = document.createElement("span");
      badge.className = "tech-badge";
      badge.textContent = tech;
      technologies.appendChild(badge);
    });

    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(technologies);
    projectCard.appendChild(img);
    projectCard.appendChild(info);
    container.appendChild(projectCard);

    if (project.link && project.link !== "#") {
      projectCard.style.cursor = "pointer";
      projectCard.addEventListener("click", () => {
        window.open(project.link, "_blank");
      });
    }
  });
}

// Load contact information
function loadContactInfo() {
  if (!linkedInData) return;

  const locationEl = document.getElementById("contact-location");
  const phoneEl = document.getElementById("contact-phone");
  const emailEl = document.getElementById("contact-email");

  if (locationEl)
    locationEl.textContent = linkedInData.profile.location || "Ciudad, País";
  if (phoneEl) phoneEl.textContent = linkedInData.profile.phone;
  if (emailEl) emailEl.textContent = linkedInData.profile.email;
}

// Handle contact form submission
function handleContactForm() {
  const form = document.getElementById("contact-form");
  if (!form || !linkedInData) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    const mailtoLink = `mailto:${linkedInData.profile.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;

    window.location.href = mailtoLink;
  });
}

// Scroll effects
function initScrollEffects() {
  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)";
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });

  // Animate skills on scroll
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".skill-progress");
          progressBars.forEach((bar) => {
            const width = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  const skillsSection = document.querySelector(".skills");
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Fade in animation for sections
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";
    fadeObserver.observe(section);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
