document.getElementById("navbar").innerHTML = `
<nav class="sidebar">
  <h2>Portfolio</h2>
  <ul>
    <li><a href="../../index.html">CV en ligne</a></li>
    <li><a href="project_territoryCapture.html">Projet Territory Capture</a></li>
    <li><a href="project_chatGames.html">Projet Chat Games</a></li>
    <li><a href="project_lifeInno.html">Projet Life Inno</a></li>
  </ul>
</nav>
`;

const page = location.pathname.split("/").pop();
document.querySelectorAll(".sidebar a").forEach(link => {
  if (link.getAttribute("href") === page) {
    link.classList.add("active");
  }
});
