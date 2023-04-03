function toggleMenu(num){
    let sections = document.getElementsByClassName("sections");
    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    sections[num].style.display = "block";
}
document.getElementById("one").addEventListener("click", ()=>toggleMenu(0));
document.getElementById("two").addEventListener("click", ()=>toggleMenu(1));
document.getElementById("three").addEventListener("click", ()=>toggleMenu(2));
document.getElementById("four").addEventListener("click", ()=>toggleMenu(3));
document.getElementById("five").addEventListener("click", ()=>toggleMenu(4));
