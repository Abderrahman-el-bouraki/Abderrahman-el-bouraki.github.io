const menu = document.getElementsByTagName("ul")[0]
const btn = documentvgetElementsByTagName("button")[0]

btn.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.style.width === "50vw") {
    menu.style.width = "0"
  }
  else {
    menu.style.width = "50vw"
  }
}
