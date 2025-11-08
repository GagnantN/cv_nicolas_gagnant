const projects = document.querySelectorAll(".project");
const modal = document.getElementById("project-modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-description");
const button = document.getElementById("modal-button");
const closeBtn = document.getElementById("close-modal");

// 🔹 Projet Pygame : ouvre une autre page (pas modal)
document.querySelectorAll(".project.direct-link").forEach(project => {
  project.addEventListener("click", () => {
    window.location.href = project.dataset.link;
  });
});

// 🔹 Autres projets : modal
projects.forEach(project => {
  if (!project.classList.contains("direct-link")) {
    project.addEventListener("click", () => {
      modal.style.display = "flex";
      title.textContent = project.dataset.title;
      desc.textContent = project.dataset.description;
      button.href = project.dataset.link;
    });
  }
});

// Fermeture modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => e.target === modal && (modal.style.display = "none"));
