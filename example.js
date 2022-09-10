const word = "Hola, mi nombre es Jhorman"; 

function LastWord(word) {
    const splitted = word.split(" "); //[ 'Hola,', 'mi', 'nombre', 'es', 'Jhorman' ]
    const lastSplitted = splitted.slice(-1); //[ 'Jhorman' ]
    const deleteArray = lastSplitted.join(); //Jhorman
    console.log(deleteArray);
}

LastWord(word)