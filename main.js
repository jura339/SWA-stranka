//-------------------------------------------------------
//parallax efekt
//-------------------------------------------------------
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let para4 = document.getElementById('para4');
let para5 = document.getElementById('para5');
let para6 = document.getElementById('para6');
let map = document.getElementById('Mapa');
//var h = window.innerHeight;
//map.style.top = h + 'px';

document.addEventListener('scroll', function () {
    console.log(para1.style.height)
    let value = window.scrollY;
    para1.style.top = (value * -0.05) + 'px';
    para2.style.top = (value * -0.15) + 'px';
    para3.style.top = (value * -0.5) + 'px';
    para4.style.top = (value * -0.9) + 'px';
    para5.style.top = (value * -1.3) + 'px';
    para6.style.top = (value * -1.6) + 'px';
    map.style.top = (value * -3) + 'px';
   // console.log(map.style.top);
    });

//-------------------------------------------------------
//zmena obrazku
//-------------------------------------------------------
