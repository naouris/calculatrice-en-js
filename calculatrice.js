const touches = [...document.querySelectorAll('.bouton')];

/* 
const nouveauTab = tableau.map(element => faire quelque chose à cet element ); 
elle retourne le résultat sous forme d'un nouveau tableau
la fonction map prend chaque élément d'un tableau
*/ 
const listkeytouche = touches.map(touches =>touches.dataset.key);
const ecran = document.querySelectorAll('.ecrant');


document.addEventListener("keydown",(e)=>{
 const valeur = e.keyCode.toString();
 //console.log(valeur,typeof valeur)
 calculer(valeur);
})

document.addEventListener("click",(e)=>{
    const valeur = e.target.dataset.key;
  // console.log(valeur,typeof valeur);
  calculer(valeur);
})

const calculer =(valeur)=>{
    if(listkeytouche.includes(valeur)) { //verifier si le valeur et inclut au tableau /listkeytouche/
        switch(valeur){
         case'8':
               ecran.textContent = "";
                break;
         case'187':
               const calcul = eval(ecran.textContent); //eval() fait le calcul et retourner la valeur lorsque ont apuit sur entrer
               ecran.textContent =calcul; 
                break;
         default:
               const indexKeycode = listkeytouche.indexOf(valeur);
               const touche = touches[indexKeycode];
               ecran.textContent += touche.innerHTML;
        }
     
    }
}

