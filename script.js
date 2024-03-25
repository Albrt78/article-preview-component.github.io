const notificationBar = document.querySelector(".card__wrapper__notification");
const shareButton = document.querySelector(".card__wrapper__share");

shareButton.addEventListener("click", () => {
    notificationBar.classList.toggle("active");
});
