// 1.
// À l'aide d'une boucle for, entrer 10 prénoms de personnes dans un tableau et les saluer tour à tour.

// let tab = ["Adil", "Agim", "Mouna", "Stan", "Seif", "Lira", "Elvis", "Ali", "Elias 1 ", "Elias 2"];

// for (let i = 0; i < tab.length; i++) {
//     console.log("Bonjour " + " " + tab[i]);
// }



// let nom;
// let tab = [];
// for (let i = 0; i < 10; i++){
//     nom = prompt("Entre un prenom");
//     tab.push(nom);
//     console.log("bonjour " + " " + tab[i]);

// }







// 2.
// Sur base de l'exercice précédent, dire "Yo + prénom" aux personnes dont le prénom commence par un A, "Salut + prénom" aux personnes dont le prénom commence par un E, "ça gaze + prénom ?" aux personnes dont le prénom commence par un N

// let tab2 = ["Adil", "Agim", "Mouna", "Nathan", "Seif", "Nasila", "Elvis", "Ali", "Elias 1 ", "Elias 2"];

// for (let i = 0; i < tab2.length; i++){
//     if (tab2[i].charAt(0) == "A"){
//         console.log("Yo" + " " + tab2[i]);
//     }else if (tab2[i].charAt(0) == "E"){
//         console.log("Salut" + " " + tab2[i]);

//     }else{
//         console.log("Ca gaze" + " " + tab2[i] + " ?");

//     }
// }





// TEST FAUX
// for (let i = 0; i < tab2.length; i++) {
//     console.log("Yo " + " " + tab2[i].charAt());
//     console.log("Salut " + " " + tab2[i].charAt());
//     console.log("Ca gaze " + " " + tab2[i].charAt());

// }





// 3.
// Trouvez un moyen de mettre en majuscule un élément sur deux dans un array avec une boucle for (ex: ["JAVASCRIPT", "c'est", "FACILE"])

let tab = ["Wesh ", "ca va ", "ou ", "quoi?", "Bruuh",];

// Test 1 
// for (let i = 0; i < tab.length; i++){

//     console.log(tab[i].toUpperCase());
// }

//even odd

//Test 2
// for (let i = 0; i < tab.length; i++){
//     tab[i].toUpperCase();
//     console.log(tab[i]);
// }


// test 3 IF ELSE

// for (let i = 0; i < tab.length; i++){
//     if (tab[i] == tab[1]){
//         console.log(tab[i].toUpperCase());

//     }else{
//         console.log(tab[i].toLowerCase());

//     }
// }

// TEST 4 ON Y EST PRESKK

for (let i = 0; i < tab.length; i++){
    if (tab[i] == tab[1]){
        console.log(tab[i].toUpperCase());

    }else if (tab[i] == tab[3]){
        console.log(tab[i].toUpperCase());

    }else{
         console.log(tab[i].toLowerCase());

    }

    
}






// 4.
// // Trouvez un moyen de faire rentrer un mot de passe a un utilisateur avec une boucle for et des conditions. S'il ne trouve pas le mot de passe après 3 essais, affichez-lui "accès refusé", sinon, affichez "accès accordé".


// let mdp = prompt("Entrez un mdp");


// for (let i = 0; i < 3; i++) {
//    if ( mdp != "123"){
//        alert("Accès refusé, réessaye");
//        let mdp = prompt("Entrez un mdp");

//    }else{
//        alert("Welcomeee");
//    }
// }


