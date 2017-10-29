
function printPets(pets) {
    /**
     * Fill in this part!
     *
     * For each pet, use console.log to print the pet's information on a new line,
     * like:
     *
     * Ralph has a dog named Stuart.
     *
     * For extra credit, use the correct article (a/an) based on the letter the type of pet
     * starts with.
      */

    // TODO: your code goes here
}

// Here we are loading a function in order to read the contents of pets.json
// Don't worry about understanding the details here yet!
var fs = require('fs');
fs.readFile('pets.json', 'utf8', function(err, contents) {
    var pets = JSON.parse(contents);
    /**
     *  pets is an array, where each element is an object that looks something like:
     *
     *  {
     *    owner: "Bob",
     *    animal: "dog",
     *    name: "Spot"
     *  }
     *
      */

    // call printPets to print the pets information
    printPets(pets);
});


