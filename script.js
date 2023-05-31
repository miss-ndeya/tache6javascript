// creation du tableaux
let mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet'];
document.write(mois + `<br>`+ `<br>`)

// retirer la dernier valeur du tableau.
mois.pop();

// afficher les valeur du tableau avec document.write.
for(let i of mois){
    document.write(i + `<br>`+ `<br>`);
}

// ajouter la valeur aout. 
mois.push('aout');
document.write(mois + `<br>`+ `<br>`);


// remplacer fevrier par fevrier.
mois[1] = 'fevrier';

// afficher le nombre de valeur du tableau avec document.write.
document.write(`le nombre de valeur du est: ${mois.length}` + `<br>`+ `<br>`);

// afficher la troixieme valeur avec document.write.
document.write(`la troixieme valeur du tableau est: ${mois[2]}`);

