"use strict";
exports.__esModule = true;
//---------------Les iterateurs---------------
var meschoix = [
    { "id": 1, "etab": "Technolab", "filiere": "Génie logiciel" },
    { "id": 2, "etab": "Sup management", "filiere": "Marketing" },
    { "id": 3, "etab": "Iam", "filiere": "Management" },
];
var tabset = new Set([1, 1, 2, 2, 3, 'tata', 4, 5, 5, 6]);
// console.table(tabset);
console.log(tabset.has(50));
// for (let c in meschoix) {
//     console.log(meschoix[c].etab);
// }
// for (let c of meschoix) {
//     console.log(c.filiere);
// }
//---------------Classe et methodes---------------
// let c = new Choix();
// c.add('GL4');
// c.show();
//---------------Type de base---------------
// let c: Choix();
// let isconnected: boolean = true;
// let age: number = 20;
// let nom: string = 'Ali';
// let mon_etat_civile = `J m'appele ${nom} et j'ai ${age} ans`;
// console.log(mon_etat_civile);
// let tabEtat: string[] = ['Technolab', 'Sup Management'];
// console.table(tabEtat);
//---------------Premier script---------------
// function ditBonjour(person) {
//     return 'Bonjour ' + person;
// }
// let user = 'Moussa';
// console.log(ditBonjour(user));
