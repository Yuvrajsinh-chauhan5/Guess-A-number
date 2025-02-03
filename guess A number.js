
let start = confirm("Welcome to Guess a number Game.... you got 10 chances to guess a correct number are you ready to play?")

function easy() {
   let a = Math.floor(Math.random()*100)+1;

   var chances = 10;
   
   while( start && chances > 0){
    
      if(start == true){
      let input = prompt("Guess a number...") 
   
      if(input == a){
         alert("Congratulations!!!!! you guessed the correct number")
         break;
      }
      else if(input === null){
         alert("Game exited!!!!")
         break;
      }
      else{
         chances--;
         alert(chances+" Chances Are left!")
         alert("correct number was " + a)
      }
      if(chances == 0){
         alert("Game over!!!!")
         alert("correct number was " + a)
      }
      }
}
}

function hard()
{
var chances = 10;

while( start && chances > 0){
   let a = Math.floor(Math.random()*100)+1;
   if(start == true){
   let input = prompt("Guess a number...") 

   if(input == a){
      alert("Congratulations!!!!! you guessed the correct number")
      break;
   }
   else if(input === null){
      alert("Game exited!!!!")
      break;
   }
   else{
      chances--;
      alert("Correct number was " + a);
       alert(chances+" Chances Are left!")
   }
   if(chances == 0){
      alert("Game over!!!!")
      alert("Correct number was " + a);
   }
   }

}

}


if(start == true){
   let level = prompt("Choose the difficulty level for the game:\n1️ Easy Level – A random number is generated once, and you have 10 chances to guess it.\n2 Hard Level – A new random number is generated every time you guess incorrectly, and you still have 10 chances to find the correct number\nEnter 1 for Easy Level or 2 for Hard Level.")


   if(level == 1){
      easy()
   }
   else if(level == 2){
      hard()
   }
}
  