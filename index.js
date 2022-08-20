const menu = document.getElementsByTagName("ul")[0]
const btn = document.getElementsByTagName("button")[0]
const line__1 = document.querySelector("i:nth-child(1)")
const line__2 = document.querySelector("i:nth-child(2)")
const line__3 = document.querySelector("i:nth-child(3)")
btn.addEventListener("click", toggleMenu)
function toggleMenu() {
line__1.classList.toggle("animate--1")
line__2.classList.toggle("animate--2")
line__3.classList.toggle("animate--3")
if (menu.style.height === "100vh") {
menu.style.height = "0"
}
else {
menu.style.height = "100vh"
}
}