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
let iker = 0; //Ezzel fogjuk szétválasztani a kódot az IKER-1 és IKER-2 oldalakhoz

//Navigációs felirat színezése függően IKER-1 vagy IKER-2 oldaltól
function navSzinezes() {
    const pek = document.querySelectorAll('.nav p');
    for (let i = 0; i < pek.length; i++) {
        if (iker == 2) {
            pek[i].style.color = '#fff';
            pek[i].onmouseover = function () {
                this.style.color = '#d64c49';
                this.style.transition = '0.4s';
            }
            pek[i].onmouseout = function () {
                this.style.color = '#fff';
            }
        } else {
            pek[i].style.color = '#fdc100';
            pek[i].onmouseover = function () {
                this.style.color = '#4b9074';
                this.style.transition = '0.4s';
            }
            pek[i].onmouseout = function () {
                this.style.color = '#fdc100';
            }
        }
    }
}
//Ez ezért kell, hogy gördülékeny legyen a szélesség növelése mindkét hasábnál
gombIker1.addEventListener('mouseover', function () {
    iker1oldal.style.zIndex = '2';
    iker2oldal.style.zIndex = '1';
    iker = 1;
    kep = document.querySelector('.iker-1 .kep');
    homePageOsszes();
    informaciokPageOsszes();
    tananyagPageOsszes();
    feladatokPageOsszes()
    felmeroPageOsszes();
    //Ha kattintok bármelyik órai (1-10) foglalkozáson, és utána VISSZA nyíllal kilépek, akkor újboli visszalépéskor egymáson maradtak a feliratok. Ezzel kiküszöbölöm!
    let oraOsszes = document.querySelectorAll('.ora');
    for (let i= 0; i < oraOsszes.length; i++) {
        oraOsszes[i].style.display = 'none';
    }
    //Beállítom, hogy az 1 óra jelenjen meg!
    document.querySelector('.iker-1 .ora_01-page').style.display = 'grid';
    //IKER-1 képzésen végrehajtott feladatok kiírása
    document.querySelector('.iker-1 .nap_01-page').style.display = 'grid';
});
gombIker2.addEventListener('mouseover', function () {
    iker2oldal.style.zIndex = '2';
    iker1oldal.style.zIndex = '1';
    iker = 2;
    kep = document.querySelector('.iker-2 .kep');
    homePageOsszes();
    informaciokPageOsszes();
    tananyagPageOsszes();
    feladatokPageOsszes()
    felmeroPageOsszes();
    //Ha kattintok bármelyik órai (1-10) foglalkozáson, és utána VISSZA nyíllal kilépek, akkor újboli visszalépéskor egymáson maradtak a feliratok. Ezzel kiküszöbölöm!
    let oraOsszes = document.querySelectorAll('.ora');
    for (let i = 0; i < oraOsszes.length; i++) {
        oraOsszes[i].style.display = 'none';
    }
    //Beállítom, hogy az első óra jelenjen meg!
    document.querySelector('.iker-2 .ora_01-page').style.display = 'grid';
    //IKER-2 képzésen végrehajtott feladatok kiírása    
    document.querySelector('.iker-2 .nap_01-page').style.display = 'grid';
});
//Kiszervezés függvényekbe
//Mivel 2 egyforma tartalom van függően az IKER-1 vagy IKER-2 oldaltól és csak egyiket mutatja meg, ezért ki kellett gyűjteni az összeset és a megfelelőt hozzárendelni az odavaló oldalhoz.
function homePageOsszes() {
    let homePageAll = document.querySelectorAll('.home-page');
    for (let i = 0; i < homePageAll.length; i++) {
        if (iker == 1) {
            homePage = homePageAll[0];
        } else {
            homePage = homePageAll[1];
        }
    }
}
function informaciokPageOsszes() {
    let informaciokPageAll = document.querySelectorAll('.informaciok-page');
    for (let i = 0; i < informaciokPageAll.length; i++) {
        if (iker == 1) {
            informaciokPage = informaciokPageAll[0];
        } else {
            informaciokPage = informaciokPageAll[1];
        }
    }
}
function tananyagPageOsszes() {
    let tananyagPageAll = document.querySelectorAll('.tananyag-page');
    for (let i = 0; i < tananyagPageAll.length; i++) {
        if (iker == 1) {
            tananyagPage = tananyagPageAll[0];
        } else {
            tananyagPage = tananyagPageAll[1];            
        }
    }
}
function feladatokPageOsszes() {
    let feladatokPageAll = document.querySelectorAll('.feladatok-page');
    for (let i = 0; i < feladatokPageAll.length; i++) {
        if (iker == 1) {
            feladatokPage = feladatokPageAll[0];
        } else {
            feladatokPage = feladatokPageAll[1];
        }
    }
}
function felmeroPageOsszes() {
    let felmeroPageAll = document.querySelectorAll('.felmero-page');
    for (let i = 0; i < felmeroPageAll.length; i++) {
        if (iker == 1) {
            felmeroPage = felmeroPageAll[0];            
        } else {
            felmeroPage = felmeroPageAll[1];            
        }
    }
}
//Menü kiosztása
const pageLink = document.querySelectorAll('.page-link');
for (let i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener('click', function (event) {
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const pageUres = document.querySelectorAll('.page');
        for (let i = 0; i < pageUres.length; i++) {
            pageUres[i].style.display = 'none';
        }
        if (iker == 1) {
            document.querySelector('.iker-1 .' + name + '-page').style.display = 'grid';
        } else {
            document.querySelector('.iker-2 .' + name + '-page').style.display = 'grid';
        }
    });
}
//IKER-1 oldalon lévő gombra kattintva eltünik:
function cimNyilEltunik() {
    cimNyil.style.cssText = 'opacity: 0; visibility: hidden'; //be kell állítani, hogy eltünt állapotban se legyen kattintható!!!!
    cimNyil.style.transition = 'all 0.5s'
}
function ikerGomb() {  
    navSzinezes();
    //Ha az IKER-1 gomra kattintunk...
    if (iker == 1) {
        homePage.style.display = 'grid';

        nav.style.display = 'grid';
        nyilBal.style.display = 'block'
        nyilJobb.style.display = 'none';
        
        if (iker1oldal.style.height == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('main p').style.display = "block";
            document.querySelector('.iker-1 h1').style.marginTop = "7rem";
        }
        else if (iker1oldal.style.width == '100%') {
            iker1oldal.style.alignContent = 'start';
            document.querySelector('main p').style.display = "block";
            document.querySelector('.iker-1 h1').style.marginTop = "7rem";
        }
    }
    //Ha az IKER-2 gombra kattintunk
    else {
        homePage.style.display = 'grid';

        nav.style.display = 'grid';
        nyilJobb.style.display = 'block';
        nyilBal.style.display = 'none';

        if (iker2oldal.style.height == '100%') { //eredetileg 100vh volt (helyesen!)
            iker2oldal.style.alignContent = 'start';
            document.querySelector('main p').style.display = "block";
            document.querySelector('.iker-2 h1').style.marginTop = "7rem";
        }
        else if (iker2oldal.style.width == '100%') {
            iker2oldal.style.alignContent = 'start';
            document.querySelector('main p').style.display = "block";
            document.querySelector('.iker-2 h1').style.marginTop = "7rem";
        }
    }
}
function visszaGomb() {
    homePage.style.display = 'none';
    informaciokPage.style.display = 'none';
    tananyagPage.style.display = 'none';
    feladatokPage.style.display = 'none';
    felmeroPage.style.display = 'none';
    //tartalom eltűnik
    if (iker == 1) {
        document.querySelector('main p').style.display = "none";
        document.querySelector('.iker-1 h1').style.marginTop = "3vh";

        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nav.style.display = 'none';
        gombIker1.style.display = 'block';

    } else {
        document.querySelector('main p').style.display = "none"
        document.querySelector('.iker-2 h1').style.marginTop = "3vh";

        cimNyil.style.cssText = 'opacity: 1; visibility: visible';
        cimNyil.style.transition = 'all 0.5s'
        nav.style.display = 'none';
        gombIker2.style.display = 'block';
    }
}

//Az oldalon a hasábok mozgása 600px alatt és felette
//muszáj volt max-width-del megoldani!!!
const maxSzel399 = window.matchMedia("(max-width: 399px)");
const maxSzel599 = window.matchMedia("(max-width: 599px");
const maxSzel899 = window.matchMedia("(max-width: 899px)");
const maxSzel1199 = window.matchMedia("(max-width: 1199px)");
const maxSzel1799 = window.matchMedia("(max-width: 1799px)");
const minSzel1800 = window.matchMedia("(min-width: 1800px)");

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
            iker2oldal.style.minHeight = '80rem';
        } else {
            iker2oldal.style.minHeight = '60rem';
        }
        iker2oldal.style.height = '100%';  //eredetileg 100vh volt (helyesen!)
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
            //document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
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
            //document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: center; grid-column: 2/14; grid-row: 3/4';
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
            //document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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
            //document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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
            //document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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
            //document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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
            //document.querySelector('.iker-1 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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
            //document.querySelector('.iker-2 .leiras').style.cssText = 'display: block; text-align: left; grid-column: 2/12; grid-row: 3/4';
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

//Tananyag rész
//Eltüntetem az összes tananyag osztályú oldalt a TANANYAG oldalról
const tananyagUres = document.querySelectorAll('.tananyag');
for (let i = 0; i < tananyagUres.length; i++) {
    tananyagUres[i].style.display = 'none';
}
//Kigyűjtöm a TANANYAG linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
const tananyagLink = document.querySelectorAll('.tananyag-link');
for (let i = 0; i < tananyagLink.length; i++) {
    tananyagLink[i].addEventListener('click', function (event) {
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const tananyagUres = document.querySelectorAll('.tananyag');
        for (let i = 0; i < tananyagUres.length; i++) {
            tananyagUres[i].style.display = 'none';
        }
        if (iker == 1) {
            document.querySelector('.iker-1 .' + name + '-page').style.display = 'grid';
        } else {
            document.querySelector('.iker-2 .' + name + '-page').style.display = 'grid';
        }        
    });
}
//Feladatok rész
//Eltüntetem az összes feladatok osztályú oldalt a FELADATOK oldalról
const feladatokUres = document.querySelectorAll('.feladatok');
for (let i = 0; i < feladatokUres.length; i++) {
    feladatokUres[i].style.display = 'none';
}
//Kigyűjtöm a FELADATOK linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
const feladatokLink = document.querySelectorAll('.feladatok-link');
for (let i = 0; i < feladatokLink.length; i++) {
    feladatokLink[i].addEventListener('click', function (event) {
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const feladatokUres = document.querySelectorAll('.feladatok');
        for (let i = 0; i < feladatokUres.length; i++) {
            feladatokUres[i].style.display = 'none';
        }
        if (iker == 1) {
            document.querySelector('.iker-1 .' + name + '-page').style.display = 'grid';
        } else {
            document.querySelector('.iker-2 .' + name + '-page').style.display = 'grid';
        }
    });
}

//Accordion panel a TANANYAGOK oldalhoz
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.height == "100%") {
            panel.style.visibility = "hidden";
            panel.style.height = "0";
        } else {
            panel.style.visibility = "visible";
            panel.style.height = "100%";
            panel.style.transition = 'all 0.5s';
        }
    });
}

