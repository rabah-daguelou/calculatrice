const ecran=document.querySelector('.ecran')
// Récupérer tous les boutons dans la variables touches (retour d'une nodeList)
let touches=document.querySelectorAll('.bouton');
// Transformer la nodeList en tableau
touches=[...touches];

// Récupérer les codes des touches
// Array.map() retourne un nouveau tableau selon la fonction callback
const listKeyCode= touches.map(element=> element.dataset.key);
console.log(listKeyCode);

// Evénement keydown
document.addEventListener('keydown', (e)=>{
// Récupérer le code de la touche pressée
// Et le convertir en string
    const valeur=e.keyCode.toString();
    
    // Lancer la fonction calculer avec la valeur associée
    calculer(valeur)
})

// Evénement clic
document.addEventListener('click', (e)=>{
    //Récupérer le code datakey de l'élément html pressé
    const valeur=e.target.dataset.key;
    
    // Lancer la fonction calculer avec la valeur associée
    calculer(valeur)
})

// Fonction calculer
const calculer= (valeur)=>{
    let result
    if(listKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent='';
                break;
            case '13':
               result=eval(ecran.textContent);
                ecran.textContent=result;
                break;
            default:
                const indexKeyCode=listKeyCode.indexOf(valeur);
                const touchValue=touches[indexKeyCode];
                if(ecran.textContent.length>15){
                    alert ('Votre nombre est trop long !!');
                
                }
                ecran.textContent+=touchValue.textContent;

        }
    }
}

// Evénement Erreur
window.addEventListener('error', (e)=>{
    alert('Merci de vérifier votre calcul !!'+ e.message)
})