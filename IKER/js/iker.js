//document.querySelector('.fooldal').style.display = 'grid';


const pageLink = document.querySelectorAll('.page-link');

for (let i = 0; i < pageLink.length; i++) {
    console.log(pageLink.length);
    pageLink[i].addEventListener('click', function (event) {
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const pageUres = document.querySelectorAll('.page');
        for (let i = 0; i < pageUres.length; i++) {
            console.log(pageUres.length);
            pageUres[i].style.display = 'none';
        }
        document.querySelector('.' + name + '-page').style.display = 'block';
    });
}

//Változók
const gombIker1 = document.querySelector('.gombIker1');
const gombIker2 = document.querySelector('.gombIker2');
const iker1oldal = document.querySelector('.iker-1');
const iker2oldal = document.querySelector('.iker-2');
const cimNyil = document.querySelector('.cimNyil');
const nyilBal = document.querySelector('#nyilBal');
const nyilJobb = document.querySelector('#nyilJobb');

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

//IKER-1 oldalon lévő gombra kattintva eltünik:
function cimNyilEltunik() {
    cimNyil.style.cssText = 'opacity: 0; visibility: hidden'; //be kell állítani, hogy eltünt állapotban se legyen kattintható!!!!
    cimNyil.style.transition = 'all 0.5s'
}
function eltunikIker() {
    //Ha az IKER-1 gomra kattintunk...
    if (iker == 1) {
        nyilBal.style.cssText = 'opacity: 1; visibility: visible';
        nyilBal.style.transition = 'all 0.5s';
    }
    //Ellenben...
    else {
        nyilJobb.style.cssText = 'opacity: 1; visibility: visible';
        nyilJobb.style.transition = 'all 0.5s';
    }
}
//IKER-1 oldalon lévő VISSZA gombra kattintva megjelenik:
function megjelenikIker() {
    //Ha az IKER-1 oldalon lévő VISSZA nyílra kattintunk...
    if (iker == 1) {
        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nyilBal.style.cssText = 'opacity: 0; visibility: hidden';
        nyilBal.style.transition = 'all 0.5s';
        gombIker1.style.display = 'block';
    }
    //Ha az IKER-2 oldalon lévő VISSZA gombra kattintunk...
    else {
        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nyilJobb.style.cssText = 'opacity: 0; visibility: hidden';
        nyilJobb.style.transition = 'all 0.5s';
        gombIker2.style.display = 'block';
    }
}
//Késleltetett tartalom megjelenítés - IKER-1 oldal
function megjelenikTartalomIker() {
    //Ha az IKER-1 gombját nyomtuk meg...
    if (iker == 1) {
        if (iker1oldal.style.height == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('.iker-1 .leiras').style.display = "block";
            document.querySelector('.iker-1 h1').style.marginTop = "5rem";
            document.querySelector('.iker-1 .menu').style.display = "flex";
        }
        else if (iker1oldal.style.width == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('.iker-1 h1').style.marginTop = "7rem";
            document.querySelector('.iker-1 .menu').style.display = "flex";
            document.querySelector('.iker-1 .menu').style.gridRow = '1/2';
            document.querySelector('.iker-1 .menu').style.margin = '0';
        }
    }
    //Ha az IKER-2 gombját nyomtuk meg...
    else {
        if (iker2oldal.style.height == '100vh') {
            console.log("ketto");
            iker2oldal.style.alignContent = 'start';
            document.querySelector('.iker-2 .leiras').style.display = "block";
            document.querySelector('.iker-2 h1').style.marginTop = "5rem";
            document.querySelector('.iker-2 .menu').style.display = "flex";
        }
        else if (iker2oldal.style.width == '100%') {
            iker2oldal.style.alignContent = 'start';
            document.querySelector('.iker-2 h1').style.marginTop = "7rem";
            //document.querySelector('.iker-2 h1').style.gridColumn = "2/10";
            //document.querySelector('.iker-2 h1').style.justifySelf = "self-start";
            document.querySelector('.iker-2 .menu').style.display = "flex";
            document.querySelector('.iker-2 .menu').style.gridRow = '1/2';
            document.querySelector('.iker-2 .menu').style.margin = '0';
            //document.querySelector('.iker-2 .menu').style.justifySelf = 'flex-end';
        }
    }
}
//Késletetett tartalom eltüntetése
function eltunikTartalomIker() {
    if (iker == 1) {
        document.querySelector('.iker-1 .leiras').style.display = "none";
        document.querySelector('.iker-1 .menu').style.display = "none";
        document.querySelector('.iker-1 .menu').style.margin = '2rem';
        document.querySelector('.iker-1 h1').style.marginTop = "3vh";
    } else {
        document.querySelector('.iker-2 .leiras').style.display = "none";
        document.querySelector('.iker-2 .menu').style.display = "none";
        document.querySelector('.iker-2 .menu').style.margin = '2rem';
        document.querySelector('.iker-2 h1').style.marginTop = "3vh";
    }
}
//Ikonok szövegre cserélése - hover megadása
function ikonSzovegCsere() {
    //Eltüntetem az ikonokat...
    const ikonok = document.querySelectorAll('.menu i');    
    for (let i = 0; i < ikonok.length; i++) {
        ikonok[i].style.display = 'none';
    }
    //Helyette szöveg lesz...
    const pek = document.querySelectorAll('.menu p');
    for (let i = 0; i < ikonok.length; i++) {
        pek[i].style.display = 'flex';
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
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            megjelenikTartalomIker();
        }, 850);
    });
    //VISSZA nyílra kattintással eltűnnek a dolgok, minden visszaáll
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.height = '50vh';
        iker1oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker1oldal.style.alignContent = 'center';
        eltunikTartalomIker()
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
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            megjelenikTartalomIker();
        }, 850);
    });
    //VISSZA nyílra kattintással eltűnnek a dolgok, minden visszaáll
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.marginTop = '50vh';
        iker2oldal.style.minHeight = '30rem';
        iker2oldal.style.height = '50vh';
        iker2oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker2oldal.style.alignContent = 'center';
        eltunikTartalomIker();
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
        eltunikIker();
        kep.style.display = 'none';
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
            ikonSzovegCsere()
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20rem";
        eltunikTartalomIker();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        eltunikIker();
        kep.style.display = 'none';
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
            ikonSzovegCsere()
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20rem";
        eltunikTartalomIker();
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
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 200%; overflow: hidden";
            ikonSzovegCsere();
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 23vw";
        eltunikTartalomIker();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 200%; overflow: hidden";
            ikonSzovegCsere();
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 23vw";
        eltunikTartalomIker();
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
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 150%; overflow: hidden";
            ikonSzovegCsere()
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        eltunikTartalomIker();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 150%; overflow: hidden";
            ikonSzovegCsere()
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        eltunikTartalomIker();
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
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker1.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 100%; overflow: hidden";
            ikonSzovegCsere()
        }, 850);
    });
    nyilBal.addEventListener('click', function () {
        iker1oldal.style.width = '50%';
        iker1oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        iker1oldal.style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        eltunikTartalomIker();
    });
    //IKER-1 oldal végződik
    //IKER-2 oldal kezdődik
    gombIker2.addEventListener('click', function () {
        iker2oldal.style.width = '100%';
        iker2oldal.style.transition = 'all 0.8s';
        cimNyilEltunik();
        eltunikIker();
        //Megjelenik a tartalom X idő múlva
        let ido = setTimeout(() => {
            gombIker2.style.display = 'none';
            megjelenikTartalomIker();
            document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
            kep.style.cssText = "display: block; opacity: 1; visibility: visible; grid-column: 12/-1; grid-row: 3/5; width: 100%; overflow: hidden";
            ikonSzovegCsere()
        }, 850);
    });
    nyilJobb.addEventListener('click', function () {
        iker2oldal.style.width = '50%';
        iker2oldal.style.transition = 'all 0.8s';
        megjelenikIker();
        document.querySelector('.iker-2').style.alignContent = 'center';
        kep.style.cssText = "grid-column: 2/14; grid-row: 3/4; width: 20vw";
        eltunikTartalomIker();
    });
    //IKER-2 oldal végződik
}


