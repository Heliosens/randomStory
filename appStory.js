let writeStory = document.querySelector("button");
let writeFrame = document.querySelector("div");
let userName = document.getElementById("userName");
let valid = document.getElementById("valid");

let name = ["le dragon", "le chat", "la tortue", "Godzilla", "la princesse", "la grenouille", "le feu"];
let thing = ["en carosse", "un gâteau", "son chapeau pointu", "la citrouille", "en balai"];
let temp = ["tiéde", "brulant", "glacé", "chaude", "violette"];
let adj = ["rose", "petit", "grand", "gentil", "en colère", "géant", "méchant", "timide"];
let place = ["dans le jardin", "partout dans le monde", "dehors", "à Fourmies", "à la maison", "en vacances", "dans la foret"];
let verb = ["joue", "se promène", "travaille", "mange", "crache", "parle a"];

// get value of user's name
valid.addEventListener('click', function (){
    console.log(userName.value);
})

// create and display story
writeStory.addEventListener('click', function (){
    let firstWord = choice(name);
    console.log(firstWord);

    writeFrame.innerHTML += firstWord + " " + choice(adj) + " " + choice(verb) + " " + choice(place) + " " +
        choice(thing) + " " + choice(temp) + "<br>";
})

/**
 *
 * @param tableName
 * @returns a word
 */
function choice (tableName){
    return tableName[Math.floor(Math.random() * tableName.length)];
}

