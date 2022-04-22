const pages = document.querySelectorAll("div");
const introButton = document.querySelector(".start");
const highScoreButton = document.querySelector(".highbutton");
const submitScoreBUtton = document.querySelector(".submithi")








highScoreButton.addEventListener("click", () => {
    pages[0].classList.add("hidden");
    pages[3].classList.remove("hidden");
});
introButton.addEventListener("click", () => {
    pages[0].classlist.toggle("hidden")
    pages[1].classList.toggle("hidden");
});
submitScoreButton.addEventListener("click", () => {

});

//quiz code
const questions = {
    "What is the difference between == and ===",
    "question 2",
    "question 3"
};
const correctAns = {
    "== doesn't check types, while === does"
};
//randomize questions and answers
const qAnswers = {
    correctAns[qIndex],
    incorrect1[]
};
const incorrect1 = {}
const incorrect2 = {}
const incorrect3 = {}


function displayQuestion(qIndex) {
    const qheader = document.querySelector(".quiz h2")
    const qbutton = document.querySelector(".quiz button");
    qheader.innerHTML = questions[qIndex]
    for (let i = 0; i < qbuttons.length; i++) {
        qbuttons[i].innerHTML
    }

}