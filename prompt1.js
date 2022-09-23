//let usersname = prompt("what is your name?");
//document.write (`Hi${usersname}, Welcome to San Francisco!`);

function getName(){
    let userName = prompt("what is your name?");
    if (userName == " " || userName == null ||userName == undefined){
    alert ("Try again! where are you going?");
    getName ();
    } else {
        document.write ("Hi " + userName + ", I love your name!");
    } 
}
getName ()

