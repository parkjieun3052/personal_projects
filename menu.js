const menuButton = document.getElementById("menuButton");
const menuWindow = document.getElementById("menuWindow");
const menuClose = document.getElementById("menuClose");

menuButton.onclick = function () {
    menuWindow.classList.add("active");
};

menuClose.onclick = function () {
    menuWindow.classList.remove("active");
};