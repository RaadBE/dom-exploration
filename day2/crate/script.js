
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
const hexToRGB = (hex) => {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
        const blue = parseInt(hex.slice(5, 7), 16);

        return [red, green, blue];
}

const getTextColor = (hexColor) => {
    const [red, green, blue] = hexToRGB(hexColor);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
        return brightness < 125 ? 'white' : 'black';
}

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
        let textColor = getTextColor(randomColor);
    people.setAttribute('style', `background-color: ${randomColor}; color: ${textColor}; order: ${randomNumber}`);
    art.setAttribute('style','display:flex; flex-direction:column');

}


