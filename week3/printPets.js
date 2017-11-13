/**
function printPets(pets) {

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

}

    // TODO: your code goes here

<!DOCTYPE html>
    <html>
    <head>
    <title>Pets</title>

    </head>
    <body>
    <script type="text/javascript">

    var owner = ["Bob", "Alice", "Albert", "Sylvia"];

    var pet = ["dog", "iguana", "cat", "dog"];

    var names = ["Spot", "Sally", "Vincent", "Tiny"];

    console.log(owner, pet, names);


    document.write(owner[0] + " has a " + pet[0] + " named " + names[0] + ".<br>");

    document.write(owner[1] + " has an " + pet[1] + " named " + names[1] + ".<br>");

    document.write(owner[2] + " has a " + pet[2] + " named " + names[2] + ".<br>");

    document.write(owner[3] + " has a " + pet[3] + " named " + names[3] + ".<br>");


</script>
    </body>
    </html>



// Here we are loading a function in order to read the contents of pets.json
// Don't worry about understanding the details here yet!

/**
var fs = require('fs');
fs.readFile('pets.json', 'utf8', function(err, contents) {
    var pets = JSON.parse(contents);

     *  pets is an array, where each element is an object that looks something like:
     *
     *  {
     *    owner: "Bob",
     *    animal: "dog",
     *    name: "Spot"
     *  }
     *


    // call printPets to print the pets information
    printPets(pets);
});

 */


