let word = "Soy una palabra";
let text = "soy un texto";

function getLastWord(word) {
    const splitted = word.split("");//['H', 'o', 'l', 'a', ',',' ', 'm', 'i', ' ', 'n','o', 'm', 'b', 'r', 'e',' ', 'e', 's', ' ', 'M','A', 'R', 'I', 'A']
    const result = splitted[splitted.length - 1];
    console.log(result);
}

function getSecondWord(text) {
    const splitted = text.split(" "); //[ 'Hola,', 'mi', 'nombre', 'es', 'MARIA' ]
    const secondWord = splitted[1];
    console.log(secondWord);
}

getSecondWord(text);
getLastWord(word);
getSecondWord("Soy jhorman y me gusta el futbol");
getLastWord("Soy jhorman y me gustan las motos");

const array = [1,2,3,4,5,6];

function sum(array) {
    return array.reduce((num1,num2) => num1 + num2); // 21
}

// console.log(sum(array));

// let suma = 0;
// totalDeSuma = []; //[ 1, 3, 6, 10, 15, 21 ]

// for (let i = 0; i < array.length; i++) {
//     suma += array[i];
//     const stringss = toString(suma)
//     console.log(stringss);
// }

const user = {name: "MARIA", correo: "maria@hotmail.com", age: 24};

function getEmail (user) {
    return user.correo;
}

console.log(getEmail(user));

const users = [
    {name: "MARIA", correo: "maria@hotmail.com", age: 24},
    {name: "Jhorman", correo: "Jhorman@hotmail.com", age: 25},
    {name: "Ian", correo: "Ian@hotmail.com", age: 24}
];


function getAllsEmails(users) {
    let arrayEmails = [];

    for (let i = 0; i < users.length ; i++) {
        const getEmails = users[i].correo;
        arrayEmails.push(getEmails);
    }
    return arrayEmails;
}

console.log(getAllsEmails(users));

function getAllsEmails1(users) {
    return users.filter(usuario => usuario.name === "Jhorman").join(); //[ { name: 'Jhorman', correo: 'Jhorman@hotmail.com', age: 25 } ]
}

console.log(getAllsEmails1(users));

const wordee = "Hola, mi nombre es Jhorman"; 

function LastWord(wordee) {
    const splitted = wordee.split(" "); //[ 'Hola,', 'mi', 'nombre', 'es', 'Jhorman' ]
    const lastSplitted = splitted.slice(-1); //[ 'Jhorman' ]
    const deleteArray = lastSplitted.join(); //Jhorman
    console.log(deleteArray);
}

LastWord(wordee);