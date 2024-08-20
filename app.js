let max=prompt("enter your limit");

let random=Math.floor(Math.random()*max)+1;
 let guess=prompt("guess the number");
 while(true){
    if(guess=="quit"){
        console.log("you are quit");
        break;
    }
    if(guess==random){
        console.log("congrats!!, your number was right ");
        break;
    }else if(guess<random){
        guess=prompt("your number is smaller,plz try again");
    }else {
        guess=prompt("your number is larger , plz try agian");
    }
 }
