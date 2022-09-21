let usersname = prompt("what is your name?");
document.write ("Hi" + usersname + "Welcome to San Francisco!");
//console.log ("username");
	
	
let usersemotion = prompt("Are you happy or sad?");
document.write(usersemotion);


let userscountry =prompt("what is your favorite country?");
document.write(userscountry);


//if the user's favorite country is france, say "Mine too!" 
//otherwise say "That's a great choice"


if (userscountry=="france")
document.write("Mine too!");
else {
    document.write ("That's a great choice");
}


