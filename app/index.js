const ul = document.querySelector("ul");
const burguer = document.querySelector(".hamburguer");

burguer.addEventListener("click", () => {
    if (ul.style.display === "none") {
        ul.style.display = "flex";
    } else {
        ul.style.display = "none";
    }
})
