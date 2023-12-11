const buttom = document.querySelector(".share-button");
const share = document.querySelector(".share-option");

buttom.addEventListener("click", () => {
    share.classList.toggle("active");
    buttom.classList.toggle("active");
});