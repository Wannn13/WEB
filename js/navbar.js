const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top  = '0';
}
function close(){
    mainMenu.style.top = '-200%';
}



// NAVBAR 
// document.addEventListener("DOMContentLoaded", function () {

//     window.addEventListener('scroll', function () {

//         if (window.scrollY > 200) {
//             document.getElementById('navbar_top').classList.add('fixed-top');
//             // document.getElementById('navbar_top').classList.add('container');
//             // document.getElementById('navbar_top').classList.add('container');
//             // add padding top to show content behind navbar
//             navbar_height = document.querySelector('.navbar').offsetHeight;
//             document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//             document.getElementById('navbar_top').classList.remove('fixed-top');
//             // remove padding top from body
//             document.body.style.paddingTop = '0';
//         }
//     });
// });
// DOMContentLoaded  end
