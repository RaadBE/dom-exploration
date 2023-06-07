// const people = document.createElement("section");
// let people_p = document.createElement("p");
// const art = document.querySelector('article');
// art.append(people);
// people.append(people_p);
// people_p.append(coll);

// let myclass = [{
//     name:'Raad',
//     about:'super nice person'

// },
// {
//     name:'Loui',
//     about:'super nice person',
// },
// {
//     name:'Loui',
//     about:'super nice person',
// },
// {
//     name:'Loui',
//     about:'super nice person'
// },
// {
//     name:'Loui',
//     about:'super nice person',
// },
// {
//     name:'Loui',
//     about:'super nice person'
// }
// ]

var myclass = [
    "William",
    "Antoine Stru",
    "Antoine Soto",
    "Florentina",
    "Glaucielle",
    "Adam",
    "Noah",
    "Safa",
    "Lucie",
    "Walid",
    "Camila",
    "Alizée",
    "Louis",
    "Ignace",
    "Francescca",
    "Prince",
    "Giorgi",
    "Leila",
    "Aziza",
    "Raad",
    "Leslie",
    "John",
    "Zuzana",
    "Jean-Louis",
    "Athi",
    "Oana"
];

let coll = myclass;
for (var i = 0; i < myclass.length; i++) {
    var randomNumber = Math.floor(Math.random() * 11);
    const people = document.createElement("section");
    let people_p = document.createElement("p");
    const art = document.querySelector('article');
    art.append(people);
    people.append(people_p);
    people.append(myclass[i]);
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    people.setAttribute('style', `background-color: ${randomColor}; order: ${randomNumber}`);
    art.setAttribute('style','display:flex; flex-direction:column');
}


