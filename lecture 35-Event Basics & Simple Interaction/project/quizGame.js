const questions = [
    {
        title: "Q1:Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        Options: [
            "option1",
            "option2",
            "option3",
            "option4",

        ],
        correctOption: 2,
    },
    {
        title: "Q2:Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        Options: [
            "option1",
            "option2",
            "option3",
            "option4",

        ],
        correctOption: 3,
    }
]

const question = document.querySelector(".que")
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

const nextBtn = document.querySelector(".next")


let currentQuestion = 0;



function showQuestion(currentQuestion) {
    const que = questions[currentQuestion];
    question.textContent = que.title
    option1.textContent = que.Options[0];
    option2.textContent = que.Options[1];
    option3.textContent = que.Options[2];
    option4.textContent = que.Options[3];
}
showQuestion(currentQuestion)

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        alert("Quiz Finished!");
    }
});



//calculating score
let score = 0;
const finalScore = document.querySelector("#score")

function scoreUpdate(selectedOption) {
    const que = questions[currentQuestion];
    let allOptions = [option1, option2, option3, option4]
    if (selectedOption == que.correctOption) {
        score += 10;
        allOptions[selectedOption - 1].style.backgroundColor = "green";
        finalScore.textContent = score
    } else {
        allOptions[selectedOption - 1].style.backgroundColor = "red";
        allOptions[que.correctOption - 1].style.backgroundColor = "green";
        //if we write only correctOption instead of que.correctOption JavaScript would look for a variable 
        // named correctOption in the current scope (which doesn’t exist), and you’d get a ReferenceError.

    }
}

option1.addEventListener("click", () => {

    scoreUpdate(1)
})
option2.addEventListener("click", () => {

    scoreUpdate(2)
})
option3.addEventListener("click", () => {

    scoreUpdate(3)
})
option4.addEventListener("click", () => {

    scoreUpdate(4)
})