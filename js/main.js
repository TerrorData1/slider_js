const navbarToggler = document.querySelector('.navbar-toggler');
const btnClose = document.querySelector('.btn-close');
const offcanvas = document.querySelector('.offcanvas');

// Déclaration menu & newDiv pour l'injection de la div offcanvas-backdrop
const menu = document.querySelector('.navbar .container-fluid');
const newDiv = document.createElement('div');

// Création d'une constante addElement avec une fonction fléchée qui injecte une div pour le backdrop
const addElement = ()=>{
    // Attribue les class à la div newDiv
    newDiv.setAttribute('class', 'offcanvas-backdrop fade show');
    // Créer la newDiv comme enfant du container fluid de la navbar
    menu.appendChild(newDiv);
}

// Lorsqu'on clique sur .navbar-toggler
navbarToggler.addEventListener('click', ()=>{
    // Ajoute la class show à .offcanvas
    offcanvas.classList.add('show');
    // Ajoute la newDiv
    addElement();
})

// Lorsqu'on clique sur le bouton .btn-close
btnClose.addEventListener('click', ()=>{
    // Supprime la class show de .offcanvas
    offcanvas.classList.remove('show');
    // Supprime la div newDiv
    newDiv.remove();
})





// carousel js

let btn = document.querySelectorAll('.btn');
let img = document.querySelectorAll('.slider ul li');// Sélectionne tous les boutons et toutes les images dans un carrousel

for (let i = 0; i < btn.length; i++) {
   // Pour chaque bouton dans la liste des boutons

   btn[i].addEventListener('click', (e) =>{
// Associe une action lors du clic sur le bouton

const imgActive = document.querySelector('.active');
// Trouve l'image actuellement active
const curentIndex = [...img].indexOf(imgActive);
// Trouve la position de l'image active dans la liste des images
const calc = btn[i].id == 'next'? 1 : -1;

// Détermine si on doit aller à l'image suivante ou précédente
let index = curentIndex + calc;
// Calcule la nouvelle position en tenant compte de la direction

if(curentIndex >= img.length -1 && btn[i].id == 'next') index = 0;
// Si l'image active est la dernière et qu'on veut aller à la suivante, revient à la première
if(curentIndex == 0 && btn[i].id == 'prev') index = img.length -1;
// Si l'image active est la première et qu'on veut aller à la précédente, va à la dernière

img[index].classList.add('active');// Met à jour la classe 'active' pour afficher la nouvelle image
imgActive.classList.remove('active');

// console.log(imgActive);
// console.log(curentIndex);

   })
}
