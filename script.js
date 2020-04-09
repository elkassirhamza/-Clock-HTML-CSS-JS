// Séléctionner les aiguilles de montre
/*const AIGUILLEHR = document.querySelector('#hour');
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
const now = new Date();

//Ajouter l'heure , minite , seconde  dans des varaiables
const hour = now.getHours();
const mins = now.getMinutes();
const seconds = now.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
const secondsDegrees = ((seconds / 60) * 360);
const minsDegrees = ((mins / 60) * 360);
const hourDegrees = ((hour / 12) * 360);


// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
 const secondsDegrees = ((seconds / 60) * 360);
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hour / 12) * 360 + ((mins / 60) * 30));

// Déplacer les aiguilles 
function demarrerLaMontre() {
   

    AIGUILLESEC.style.transform = `rotate(${secondsDegrees}deg)`;

    AIGUILLEMIN.style.transform = `rotate(${minsDegrees}deg)`;

    AIGUILLEHR.style.transform = `rotate(${hourDegrees}deg)`;


}
//Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
demarrerLaMontre();


*/







const AIGUILLEHR = document.querySelector('#hour');
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
    const now = new Date();


    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    AIGUILLESEC.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 + ((seconds / 60) * 6));
    AIGUILLEMIN.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360 + ((mins / 60) * 30));
    AIGUILLEHR.style.transform = `rotate(${hourDegrees}deg)`;
    // console.log(seconds);

}
setInterval(demarrerLaMontre, 1000);
demarrerLaMontre();