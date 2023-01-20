const heartIcon = document.querySelector(".card__heart");

heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("liked")
});