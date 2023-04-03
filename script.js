function toggleMenu(num){
    let sections = document.getElementsByClassName("sections");
    let menuItems = document.getElementsByClassName("menu-item");
    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        menuItems[i].className = "menu-item";
    }
    sections[num].style.display = "block";
    menuItems[num].className = "menu-item menu-active";
}
document.getElementById("one").addEventListener("click", ()=>toggleMenu(0));
document.getElementById("two").addEventListener("click", ()=>toggleMenu(1));
document.getElementById("three").addEventListener("click", ()=>toggleMenu(2));
document.getElementById("four").addEventListener("click", ()=>toggleMenu(3));
document.getElementById("five").addEventListener("click", ()=>toggleMenu(4));
document.getElementById("six").addEventListener("click", ()=>toggleMenu(5));
