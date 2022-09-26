//let usersemotion = prompt("Are you happy or sad?");
//document.write(usersemotion);


//function askTravel () {
  // let message = prompt ("Do you like to travel?");
   //if (message == "yes"){
  // document.write (" I love to travel too!");
//} else {
   // document.write (" You need a vacation");
//}
//}
//askTravel();

    
    function guessNumber () {
        let response;
        while (response != 2) {
        response = prompt("How many people would you like to take to Ireland? Please pick a value from 1 to 5");
        if (response !=2){
            alert ("You are so close, try again!");
        } else {
            alert (" You are right!");
        }
    }
}
guessNumber ();

        
    
    
     


    function showPic(){
        let userNum = prompt("How many times have you seen San Francisco?");
        for( let i = 0; i < userNum; i++){
            document.write ("<img src= 'Getty_San-Francisco-CA-1.jpg' style='width:400px';/>")
            }
        }
        


