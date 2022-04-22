const pages = document.querySelectorAll("div")

const introButton = document.querySelector(".introduction button")

const highScoreButton = document.querySelector(".highbutton");
const submitScoreButton = document.querySelector(".submithigh");
const timer = document.querySelector('.timer')
const quizButtons = document.querySelectorAll(".question1 button");
let questionIndex;
let currentScore = 120;

function startTimer() {
	currentScore = 120;
  
  	setInterval(function () {
    	currentScore -= 1;
        timer.innerHTML = currentScore;
    },1000)

}

introButton.addEventListener("click", () => {
    pages[0].classList.toggle("hidden");
    pages[1].classList.toggle("hidden");
    questionIndex = 0;
    displayQuestion(questionIndex);
    console.log("ok")
    startTimer();
})

highScoreButton.addEventListener("click", () => {
    pages[0].classList.add("hidden");
    pages[3].classList.remove("hidden");
})

submitScoreButton.addEventListener("click", () => {
	let inputName = document.querySelector(".yourscore input");
  	addNameToHighScore(inputName.value, currentScore);
  
  	pages[2].classList.toggle("hidden");
  	pages[3].classList.toggle("hidden");
})

function addNameToHighScore(name, score){
	const newScoreElement = document.createElement("li");
    newScoreElement.innerHTML = name + "," + score
    
    const hiList = document.querySelector('.hiscore')
    hiList.appendChild(newScoreElement)

}

const checkAns = document.querySelector(".checkans")
quizButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        if (checkAnswer(e.target, correctAns[questionIndex])) {
            //answered correctly, so you just move onto the next question
            //Display on the bottom that the answer was correct
          	checkAns.innerHTML = "RIGHT!";
            checkAns.classList.toggle("hidden");
            setTimeout(function () {
                checkAns.classList.toggle("hidden");
            }, 2000);
        } else {
            //answered incorrectly. Reduce the timer but still go to the next question
            //Display on the bottom that the answer was incorrect
            checkAns.innerHTML = "INCORRECT!";
            checkAns.classList.toggle("hidden");
            setTimeout(function () {
                checkAns.classList.toggle("hidden");
            }, 2000);
        }
        questionIndex++;
  		if(questionIndex >= questions.length) {
        	//stop showing new questions, go onto high score submission
          	pages[1].classList.toggle("hidden");
          	pages[2].classList.toggle("hidden");
        } else {
        	displayQuestion(questionIndex);
        }
    })
);



//code for quiz
const questions = new Array(
    "What is the difference between == and ===",
    "What is the difference between # and . in css",
    "What is the most useful debugging tool?",
    "What tag links Javascript?",
    "What tag links CSS?")
const correctAns = new Array(
    "== doesn't check types, while === does",
    ". is for classes # is for Ids",
    "console.log",
    "script",
    "link")
const incorrect1 = new Array("they are the same", "#is for class . is for ids", "coworker", "link", "script")
const incorrect2 = new Array("== is not equal to and === is", "they are the same", "Discord", "h1", "form")
const incorrect3 = new Array("none of the above", "none of the above", "none of the above", "none of the above", "none of the above")




function displayQuestion(qIndex) {
    const qHeader = document.querySelector(".quiz") //select header for quiz\
    const qButtons = document.querySelectorAll(".question1 button");

    //can edit to make the correct answer in a random spot
    const qAnswers = new Array(correctAns[qIndex], incorrect1[qIndex], incorrect2[qIndex], incorrect3[qIndex])

    qHeader.innerHTML = questions[qIndex];
    for (let i = 0; i < qButtons.length; i++) {
        qButtons[i].innerHTML = qAnswers[i];
    }
}

function checkAnswer(clickedButton, correctAnswer) {
    const buttonText = clickedButton.innerHTML;

    if (buttonText === correctAnswer)
        return true;
    return false;

}