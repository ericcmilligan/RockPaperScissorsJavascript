// console.log("Hello Javascript")
// let one = 1
// let two = 6
// added2 = one + two
// console.log(added2)

let user_choice = window.prompt("Enter your choice: Rock or Paper or Scissors as the first letter");

user_choice = user_choice.charAt(0).toUpperCase() + user_choice.slice(1)


if (user_choice === "R"){
  user_choice = "Rock"
}
if(user_choice === "P"){
  user_choice = "Paper"
}
if(user_choice === "S"){
  user_choice = "Scissors"
}



const computer_choice_number = Math.floor(Math.random() * 3 + 1); 

let computer_choice_text = "";



if (computer_choice_number === 1){
  computer_choice_text = "Rock";
} 
if(computer_choice_number === 2){
  computer_choice_text = "Paper"
}
if(computer_choice_number === 3){
  computer_choice_text = "Scissors"
}

console.log("You chose: " + user_choice + "\nComputer chose: " + computer_choice_text);

if (user_choice === computer_choice_text) {
  console.log("Both players selected: " + user_choice + " It's a tie");
}
if(user_choice === "Rock"){
  if (computer_choice_text == "Scissors") {
    console.log("Rock smashes Scissors! You Win!")
  } else {
    console.log("Paper covers Rock! You Lose!")
  }
}
if(user_choice === "Paper"){
  if(computer_choice_text == "Rock"){
    console.log("Paper covers Rock! You Win!")
  } else {
    console.log("Scissors cuts Paper! You Lose!")
  }
}
if(user_choice === "Scissors"){
  if(computer_choice_text == "Paper"){
    console.log("Scissors cut Paper! You Win!")
  } else {
    console.log("Rock smashes Scissors! You Lose!")
  }
}
