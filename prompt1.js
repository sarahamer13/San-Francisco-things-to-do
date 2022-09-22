//let usersname = prompt("what is your name?");
//document.write (`Hi${usersname}, Welcome to San Francisco!`);

function getName(){
    let userName = prompt("what is your name?");
    if (userName == "sandy"){
    document.write ("That's a nice name");

    } else if (userName == null){
        document.write ("Nice Try!")
    }
 else {
        document.write ("Hi " + userName + ", I love your name!");
    } 
}
getName ()

