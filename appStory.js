let writeStory = document.querySelector("button");
let writeFrame = document.querySelector("span");
let userName = document.getElementById("userName");

let name = ["le dragon", "le chat", "la tortue", "Godzilla", "la princesse", "la grenouille", "le feu"];
let thing = ["en carosse", "un gâteau", "son chapeau pointu", "la citrouille", "en balai"];
let temp = ["tiéde", "brulant", "glacé", "chaude", "violette"];
let adj = ["rose", "petit", "grand", "gentil", "en colère", "géant", "méchant", "timide"];
let place = ["dans le jardin", "partout dans le monde", "dehors", "à Fourmies", "à la maison", "en vacances", "dans la foret"];
let verb = ["joue", "se promène", "travaille", "mange", "crache", "parle a"];

// create and display story
writeStory.addEventListener('click', function (){
    // get value of user's name
    let yourName = userName.value;

    if(yourName.length > 0){
        writeFrame.innerHTML += yourName + " et ";
    }

    writeFrame.innerHTML += choice(name) + " " + choice(adj) + " " + choice(verb) + " " + choice(place) + " " +
        choice(thing) + " " + choice(temp) + "<br>";
})

/**
 *
 * @param tableName
 * @returns a word choice in table
 */
function choice (tableName){
    return tableName[Math.floor(Math.random() * tableName.length)];
}

