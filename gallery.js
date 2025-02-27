//-------------------------------------------------------
//parallax efekt
//-------------------------------------------------------
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let para4 = document.getElementById('para4');
let para5 = document.getElementById('para5');
let para6 = document.getElementById('para6');
let para7 = document.getElementById('para7');
let para8 = document.getElementById('para8');
let gallery = document.getElementById('gallery');
    
document.addEventListener('scroll', function () {
    let value = window.scrollY;
    para1.style.top = (value * -0.05) + 'px';
    para2.style.top = (value * -0.15) + 'px';
    para3.style.top = (value * -0.5) + 'px';
    para4.style.top = (value * -0.9) + 'px';
    para5.style.top = (value * -1.3) + 'px';
    para6.style.top = (value * -1.6) + 'px';
    para7.style.top = (value * -2.2) + 'px';
    para8.style.top = (value * -3) + 'px';
    gallery.style.top = (1038 + value * -3) + 'px';
    });

//-------------------------------------------------------
//zmena obrazku
//-------------------------------------------------------
let foto = document.getElementById('foto');
let odkaz = document.getElementById('odkaz')
const fotky = ["image/gallery/img1.jpeg", "image/gallery/img2.jpeg", "image/gallery/img3.jpeg", "image/gallery/img4.jpeg", "image/gallery/img5.jpeg"];
var index = 0;
function changeImage(strana) {
    if (strana === 0) {
        if (index !== 0){
        index = index - 1;}
    }
    else {
        if (index !== 4){
            index = index + 1;}
    }
    foto.src = fotky[index];
    odkaz.href = fotky[index];
};