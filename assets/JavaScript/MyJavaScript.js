const question = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");

const answerArray = [
  "It is certain.",
  " It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  " Yes.",
  " Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  " My reply is no.",
  "My sources say no",
  "Outlook not so good.",
  "Very doubtful.",
];

button.addEventListener("click", randomAnswer);
function randomAnswer() {
  let res = Math.floor(Math.random() * answerArray.length);
  if (question.value === "") {
    question.className += " is-invalid";
    message.innerHTML=""
  } else {
    question.className = " ask-input form-control mt-3  ";
    message.innerHTML =
      "<i class='fas fa-question-circle'></i>" +
      " " +
      question.value +
      "<br>" +
      "<i class='fas fa-comment'></i>" +
      " " +
      answerArray[res];
    question.value = "";
  }
}
