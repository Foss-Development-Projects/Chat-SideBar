const sideBar = document.getElementById('sidebar');
const sideBarMenu = document.getElementById('sidebar-menu');

const chatItemMenuToggle = document.getElementsByClassName("chat-item-menu-toggle");
const chatItemMenu = document.querySelectorAll("aside[data-chat-menu]")
console.log(chatItemMenu)
const openChatMenu = () => {
    for (let i = 0; i < chatItemMenuToggle.length; i++) {
        chatItemMenuToggle[i].addEventListener("click", () => {
            if (window.getComputedStyle(chatItemMenu[i]).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[0] == 0) {
                chatItemMenu[i].style.transform = "scale(1)"
            }
            else {
                chatItemMenu[i].style.transform = "scale(0)"
            }
            console.log()
        })
        document.addEventListener('click', (event) => {
            const withinBoundaries = event.composedPath().includes(chatItemMenuToggle[i])

            if (!withinBoundaries) {
                chatItemMenu[i].style.transform = "scale(0)"
            }
        })
    }
}
openChatMenu()
sideBarMenu.addEventListener('click', () => {
    sideBar.style.width = '0';
});
