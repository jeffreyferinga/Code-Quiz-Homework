const pages = document.querySelectorAll("div")

const introButton = document.querySelector(".introduction button")
const highScoreButton = document.querySelector();
const submitScoreButton = document.querySelect();

const quizButtons = document.querySelectorAll(".quiz button");
let questionIndex;

introButton.addEventListener("click", () => {
	pages[0].classList.toggle("hidden");
  	pages[1].classList.toggle("hidden");
  	questionIndex = 0;
})

highScoreButton.addEventListener("click", () => {
  pages[0].classList.add("hidden");
  pages[3].classList.remove("hidden");
})

submitScoreButton.addEventListener("click", () => {
	
})

const checkAns = document.querySelector(".checkans")
quizButtons.forEach().addEventListener("click", (e) => {
  	if(checkAnswer(e.target, correctAns[questionIndex])){
      //answered correctly, so you just move onto the next question
      //Display on the bottom that the answer was correct
    } else {
    	//answered incorrectly. Reduce the timer but still go to the next question
      //Display on the bottom that the answer was incorrect
      checkAns.innerHTML = "INCORRECT!";
      checkAns.classList.toggle("hidden");
      setTimeout(function () {
        checkAns.classList.toggle("hidden");
      }, 2000)
    }
	questionIndex++;
  	displayQuestion(questionIndex);
})



//code for quiz
const questions = new Array(
  					"What is the difference between == and ===",
                   	"question 2",
					"question 3")
const correctAns = new Array(
					"== doesn't check types, while === does")
const incorrect1 = new Array()
const incorrect2 = new Array()
const incorrect3 = new Array()



function displayQuestion(qIndex) {
  const qHeader = document.querySelector(".quiz h2") 	//select header for quiz\
  const qButtons = document.querySelectorAll(".quiz button");
  
  //can edit to make the correct answer in a random spot
  const qAnswers = new Array(correctAns[qIndex], incorrect1[qIndex], incorrect2[qIndex], incorrect3[qIndex])
  
  qHeader.innerHTML = questions[qIndex];
  for(let i = 0; i < qButtons.length; i++) {
  	qButtons[i].innerHTML = qAnswers[i];
  }
}

function checkAnswer(clickedButton, correctAnswer) {
	const buttonText = clickedButton.innerHTML;
  	
  	if(buttonText === correctAnswer)
      return true;
    return false;
  	
}

