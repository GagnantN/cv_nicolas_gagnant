// Charge la navbar sur toutes les pages
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    
    // Ajoute la classe active automatiquement selon page
    const page = location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar a").forEach(link => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  });
