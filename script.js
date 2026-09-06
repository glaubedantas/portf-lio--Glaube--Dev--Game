const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => document.querySelector(btn.dataset.go)?.scrollIntoView({behavior:"smooth"}));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
},{threshold:0.45});

sections.forEach(section => observer.observe(section));

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener("click", e => e.preventDefault());
});

window.addEventListener("scroll", () => {
  document.querySelector(".topbar").style.boxShadow =
    window.scrollY > 20 ? "0 8px 30px #0008" : "none";
});


const botao = document.querySelector(".start-btn");

botao.addEventListener("click", function() {
    alert("🎮 Bem-vindo ao Glaube Dev Game!");
});

