//메뉴 버튼 
const menuButton = document.getElementById("menuButton");
const menuWindow = document.getElementById("menuWindow");
const menuClose = document.getElementById("menuClose");

menuButton.addEventListener("click", () => {menuWindow.classList.add("active");});

menuClose.addEventListener("click", () => {menuWindow.classList.remove("active");});
