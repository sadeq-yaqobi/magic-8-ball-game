// Selecting necessary elements from the DOM
const question = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");

// Array of possible answers
const answerArray = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

// Event listener for button click
button.addEventListener("click", randomAnswer);

// Function to generate a random answer
function randomAnswer() {
  let res = Math.floor(Math.random() * answerArray.length);

  if (question.value === "") {
    // Display error message if the question field is empty
    question.className += " is-invalid";
    message.innerHTML = "";
  } else {
    question.className = "ask-input form-control mt-3";
    // Display the question and the randomly selected answer
    message.innerHTML =
      "<i class='fas fa-question-circle'></i> " +
      question.value +
      "<br>" +
      "<i class='fas fa-comment'></i> " +
      answerArray[res];
    question.value = "";
  }
}
