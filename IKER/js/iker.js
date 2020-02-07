//Ez ezért kell, hogy gördülékeny legyen a szélesség növelése mindkét 
document.querySelector('.gombIker1').addEventListener('mouseover', function () {
    document.querySelector('.iker-1').style.zIndex = '2';
    document.querySelector('.iker-2').style.zIndex = '1';
});
document.querySelector('.gombIker2').addEventListener('mouseover', function () {
    document.querySelector('.iker-2').style.zIndex = '2';
    document.querySelector('.iker-1').style.zIndex = '1';
});

//Az oldalon a hasábok mozgása 600px alatt és felette
//beállítjuk a min szélességet pixelben
let minSzel = window.matchMedia("(min-width: 600px)");
//meghívjuk a függvény induláskor
media(minSzel);
//figyeljük az állapotváltozásokat
minSzel.addListener(media);

let gombIker; //folytatni az egyszerűsítést!!!

function media(minSzel) {
    //ha egyezik 600px szélességgel
    if (minSzel.matches) {
        document.querySelector('.gombIker1').addEventListener('click', function () {
            document.querySelector('.iker-1').style.width = '100%';
            document.querySelector('.iker-1').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.cimNyil').style.transition = 'all 0.5s';
            document.querySelector('#nyilBal').style.cssText = 'opacity: 1; visibility: visible';           
            document.querySelector('#nyilBal').style.transition = 'all 0.5s';
        });
        document.querySelector('#nyilBal').addEventListener('click', function () {
            document.querySelector('.iker-1').style.width = '50%';
            document.querySelector('.iker-1').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.cimNyil').style.transition = 'all 0.5s';
            document.querySelector('#nyilBal').style.cssText = 'opacity: 0; visibility: hidden';            
            document.querySelector('#nyilBal').style.transition = 'all 0.5s';
        });
        document.querySelector('.gombIker2').addEventListener('click', function () {
            document.querySelector('.iker-2').style.width = '100%';
            document.querySelector('.iker-2').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s';
            document.querySelector('#nyilJobb').style.cssText = 'opacity: 1; visibility: visible';            
            document.querySelector('#nyilJobb').style.transition = 'all 0.5s';
        });

        document.querySelector('#nyilJobb').addEventListener('click', function () {
            document.querySelector('.iker-2').style.width = '50%';
            document.querySelector('.iker-2').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s'
            document.querySelector('#nyilJobb').style.cssText = 'opacity: 0; visibility: hidden';            
            document.querySelector('#nyilJobb').style.transition = 'all 0.5s';
        });
    }
    //ha nem egyezik
    else {
        document.querySelector('.gombIker1').addEventListener('click', function () {
            document.querySelector('.iker-1').style.height = '100vh';
            document.querySelector('.iker-1').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s'
            document.querySelector('#nyilBal').style.cssText = 'opacity: 1; visibility: visible';            
            document.querySelector('#nyilBal').style.transition = 'all 0.5s';
            
        });
        document.querySelector('#nyilBal').addEventListener('click', function () {
            document.querySelector('.iker-1').style.height = '50vh';
            document.querySelector('.iker-1').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s'
            document.querySelector('#nyilBal').style.cssText = 'opacity: 0; visibility: hidden';            
            document.querySelector('#nyilBal').style.transition = 'all 0.5s';
        });
        document.querySelector('.gombIker2').addEventListener('click', function () {
            document.querySelector('.iker-2').style.marginTop = '0vh';
            document.querySelector('.iker-2').style.height = '100vh';
            document.querySelector('.iker-2').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s'
            document.querySelector('#nyilJobb').style.cssText = 'opacity: 1; visibility: visible';            
            document.querySelector('#nyilJobb').style.transition = 'all 0.5s';
        });

        document.querySelector('#nyilJobb').addEventListener('click', function () {
            document.querySelector('.iker-2').style.marginTop = '50vh';
            document.querySelector('.iker-2').style.height = '50vh';
            document.querySelector('.iker-2').style.transition = 'all 0.8s';
            document.querySelector('.cimNyil').style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.cimNyil').style.transition = 'all 0.8s'
            document.querySelector('#nyilJobb').style.cssText = 'opacity: 0; visibility: hidden';            
            document.querySelector('#nyilJobb').style.transition = 'all 0.5s';
        });
    }
}