import { Choix } from "./choix";

//---------------Les iterateurs---------------

let meschoix: { id: number, etab: string, filiere: string }[] = [
    { "id": 1, "etab": "Technolab", "filiere": "Génie logiciel" },
    { "id": 2, "etab": "Sup management", "filiere": "Marketing" },
    { "id": 3, "etab": "Iam", "filiere": "Management" },
];

let politiciens = [
    { 'prenom': 'Emanuel', 'nom': 'MACRON', 'age': 40 },
    { 'prenom': 'Edouar', 'nom': 'PHILIPPE', 'age': 47 },
    { 'prenom': 'Bruno', 'nom': 'LE MAIRE', 'age': 49 },
    { 'prenom': 'Verginie', 'nom': 'CALMELS', 'age': 47 },
    { 'prenom': 'Alain', 'nom': 'JUPEE', 'age': 72 }];

let nom_pol = [];

// for (let p of politiciens) [
//     nom_pol.push(p.prenom.toUpperCase())
// ]

// politiciens.forEach(function (p) {
//     nom_pol.push(p.prenom.toUpperCase())
// });
nom_pol = politiciens.map(function (p, i, a) {
    return p.prenom.toUpperCase()
});
console.table(nom_pol);
//const tabset = new Set([1, 1, 2, 2, 3, 'tata', 4, 5, 5, 6]);
// console.table(tabset);

// console.log(tabset.has(50));

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