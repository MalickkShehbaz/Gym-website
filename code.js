
let Random_Number=Math.floor(Math.random()*6)+1;
let chances=0;

let my_choice=prompt("Enter your choice: ");

while(my_choice!=Random_Number)
  {
    console.log("Your Guess is wrong!");
    my_choice=prompt("Enter your choice: ");
    chances++;
  }
console.log("---------Game Over----------")
console.log("well Done you won!");
console.log("with the score: "+(100-chances));
console.log("Actual Random Number is: "+Random_Number);