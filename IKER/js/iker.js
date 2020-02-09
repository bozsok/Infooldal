//Változók
const gombIker1 = document.querySelector('.gombIker1');
const gombIker2 = document.querySelector('.gombIker2');
const iker1oldal = document.querySelector('.iker-1');
const iker2oldal = document.querySelector('.iker-2');
const cimNyil = document.querySelector('.cimNyil');
const nyilBal = document.querySelector('#nyilBal');
const nyilJobb = document.querySelector('#nyilJobb');
const nav = document.querySelector('.nav');

let kep;

let iker = 0; //Ezzel fogjuk szétválasztani a kódot, ahol két szinte egyfoma nevű változó van. pl.: gombIker1 és 2

//Ez ezért kell, hogy gördülékeny legyen a szélesség növelése mindkét hasábnál
gombIker1.addEventListener('mouseover', function () {
    iker1oldal.style.zIndex = '2';
    iker2oldal.style.zIndex = '1';
    iker = 1;
    kep = document.querySelector('.iker-1 .kep');
    console.log('1');
});
gombIker2.addEventListener('mouseover', function () {
    iker2oldal.style.zIndex = '2';
    iker1oldal.style.zIndex = '1';
    iker = 2;
    kep = document.querySelector('.iker-2 .kep');
    console.log('2');
});
//Kiszervezés függvényekbe
//Navigációs felirat színezése függően IKER-1 vagy IKER-2 oldaltól
function navSzinezes() {    
    const pek = document.querySelectorAll('.nav p');
    for (let i = 0; i < pek.length; i++) {
        if (iker == 2) {
            pek[i].style.color = '#fff';
            pek[i].onmouseover = function () {
                this.style.color = '#d64c49';
            }
            pek[i].onmouseout = function () {
                this.style.color = '#fff';
            }
        } else {
            pek[i].style.color = '#fdc100';
            pek[i].onmouseover = function () {
                this.style.color = '#4b9074';
            }
            pek[i].onmouseout = function () {
                this.style.color = '#fdc100';
            }
        }
    }
}
//IKER-1 oldalon lévő gombra kattintva eltünik:
function cimNyilEltunik() {
    cimNyil.style.cssText = 'opacity: 0; visibility: hidden'; //be kell állítani, hogy eltünt állapotban se legyen kattintható!!!!
    cimNyil.style.transition = 'all 0.5s'
}
function ikerGomb() {
    //Ha az IKER-1 gomra kattintunk...
    navSzinezes();
    if (iker == 1) {
        nav.style.display = 'grid';
        nyilBal.style.display = 'block'
        nyilJobb.style.display = 'none';

        if (iker1oldal.style.height == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('.iker-1 .leiras').style.display = "block";
            document.querySelector('.iker-1 h1').style.marginTop = "7rem";
        }
        else if (iker1oldal.style.width == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('.iker-1 h1').style.marginTop = "7rem";
        }
    }
    //Ha az IKER-2 gombra katintunk
    else {
        nav.style.display = 'grid';
        nyilJobb.style.display = 'block';
        nyilBal.style.display = 'none';

        if (iker2oldal.style.height == '100vh') {
            iker2oldal.style.alignContent = 'start';
            document.querySelector('.iker-2 .leiras').style.display = "block";
            document.querySelector('.iker-2 h1').style.marginTop = "7rem";
        }
        else if (iker2oldal.style.width == '100%') {
            iker2oldal.style.alignContent = 'start';
            document.querySelector('.iker-2 h1').style.marginTop = "7rem";
        }
    }
}
function visszaGomb() {
    //tartalom eltűnik
    if (iker == 1) {
        document.querySelector('.iker-1 .leiras').style.display = "none";
        document.querySelector('.iker-1 h1').style.marginTop = "3vh";

        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nav.style.display = 'none';
        gombIker1.style.display = 'block';

    } else {
        document.querySelector('.iker-2 .leiras').style.display = "none"
        document.querySelector('.iker-2 h1').style.marginTop = "3vh";

        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nav.style.display = 'none';
        gombIker2.style.display = 'block';
    }
}

//Az oldalon a hasábok mozgása 600px alatt és felette
//muszáj volt max-width-del megoldani!!!
let maxSzel399 = window.matchMedia("(max-width: 399px)");
let maxSzel599 = window.matchMedia("(max-width: 599px");
let maxSzel899 = window.matchMedia("(max-width: 899px)");
let maxSzel1199 = window.matchMedia("(max-width: 1199px)");
let maxSzel1799 = window.matchMedia("(max-width: 1799px)");
let minSzel1800 = window.matchMedia("(min-width: 1800px)");

//600px alatti változások
if (maxSzel599.matches) {
    //IKER-1 oldal kezdődik
    gombIker1.addEventListener('click', function () {
        iker1oldal.style.height = '100%';
        iker1oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            //megjelenikTartalomIker();
            ikerGomb();
        }, 850);
    });
    //VISSZA nyílra kattintással eltűnnek a dolgok, minden visszaáll
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.height = '50vh';
        iker1oldal.style.transition = 'all 0.8s';
        iker1oldal.style.alignContent = 'center';
        visszaGomb();
    });
    //IKER-1 oldal vége
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.marginTop = '0vh';
        if (maxSzel399.matches) {
            console.log("499px alatti");
            iker2oldal.style.minHeight = '80rem';
        } else {
            iker2oldal.style.minHeight = '60rem';
        }
        iker2oldal.style.height = '100vh';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            ikerGomb();
        }, 850);
    });
    //VISSZA nyílra kattintással eltűnnek a dolgok, minden visszaáll
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.marginTop = '50vh';
        iker2oldal.style.minHeight = '30rem';
        iker2oldal.style.height = '50vh';
        iker2oldal.style.transition = 'all 0.8s';
        iker2oldal.style.alignContent = 'center';
        visszaGomb();
    });
    //IKER-2 oldal végződik
}
//600 - 899px közötti
else if (maxSzel899.matches) {
    //IKER-1 oldal kezdődik
    gombIker1.addEventListener('click', function () {
        iker1oldal.style.width = '100%';
        iker1oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            kep.style.display = 'none';
            gombIker1.style.display = 'none';
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
            ikerGomb();
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20rem";
        visszaGomb();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            kep.style.display = 'none';
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
            ikerGomb();
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20rem";
        visszaGomb();
    });
    //IKER-2 oldal végződik
}
//900 - 1199px közötti
else if (maxSzel1199.matches) {
    //IKER-1 oldal kezdődik
    gombIker1.addEventListener('click', function () {
        iker1oldal.style.width = '100%';
        iker1oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 200%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 23vw";
        visszaGomb();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 200%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 23vw";
        visszaGomb();
    });
    //IKER-2 oldal végződik
}
//1200 - 1799px közötti 
else if (maxSzel1799.matches) {
    //IKER-1 oldal kezdődik
    gombIker1.addEventListener('click', function () {
        iker1oldal.style.width = '100%';
        iker1oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 130%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        visszaGomb();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 130%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        visszaGomb();
    });
    //IKER-2 oldal végződik
}
//1800px feletti
else if (minSzel1800.matches) {
    //IKER-1 oldal kezdődik
    gombIker1.addEventListener('click', function () {
        iker1oldal.style.width = '100%';
        iker1oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 100%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        visszaGomb();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 100%; overflow: hidden";
            ikerGomb();
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        visszaGomb();
    });
    //IKER-2 oldal végződik
}


