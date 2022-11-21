//Fonctionnalité 1 :

/*
var n=0; 
var p = document.querySelector("footer");
p.addEventListener("click",log);
function log(){
console.log('clique'+n);
n++
};
*/


//Fonctionnalité 2 :

//si qq clique sur le menu 'hamburger'(bouton à 3 lignes horizontales),  l'Id navbarHeader perd sa classe collapse
/*var button = document.querySelectorAll('.navbarHeader');
button.forEach(x => x.classList.toggle('#collapse'));
*/

/*
navbarbutton = document.getElementById('navbarHeader');
button = document.querySelector('button','.navbar-toggler');
button.addEventListener("click",function(){
navbarbutton.classList.toggle('collapse')
});
*/


//Fonctionnalité 3 :
/*
let card = document.getElementsByClassName("card")[0];
let editcard = card.getElementsByClassName("btn")[1];

function red(){
card.style.color ="red";
};
editcard.addEventListener("click",red);
*/


//--------------------------Fonctionnalité 4 :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let secondcard = document.getElementsByClassName("card")[1];
let editsecondcard = secondcard.getElementsByClassName("btn")[1];

function green() {

  if (secondcard.style.color === 'green') {
  secondcard.style.color = '' ;
  } else {
    secondcard.style.color = 'green'
};}

editsecondcard.addEventListener("click",green);


//-------------------------Fonctionnalité 5 :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let nav = document.querySelector('.navbar')
let link = document.querySelector('link')

nav.addEventListener("dblclick", function (){
if (link.disabled===true){
    link.disabled=false;
}
else{
    document.querySelector('link').disabled=true;
}
});

//-------------------------Fonctionnalité 6 :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
