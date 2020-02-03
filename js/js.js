/************************************************
Scrollozó nyilacska a képernyő jobb alsó sarkában
*************************************************/
const visszaNyil = document.getElementById('visszaNyil');
const scrollozas = () => {
    let elmozdulasPixelben = window.scrollY;

    if (elmozdulasPixelben > 20) {
        visszaNyil.style.cssText = "opacity: 1; visibility: visible";
    } else {
        visszaNyil.style.cssText = "opacity: 0; visibility: hidden";
    }
}
window.addEventListener("scroll", scrollozas);
