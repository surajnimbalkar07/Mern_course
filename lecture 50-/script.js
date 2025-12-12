class Questions {
    constructor({ id, text, options, correctOption, type }) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.correctOption = correctOption;
        this.type = type
    }
}

const Question = [
    new Questions({
        id: 1,
        text: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Pune"],
        correctOption: "New Delhi",
        type: "single"
    }),

    new Questions({
        id: 2,
        text: "Which of the following are programming languages?",
        options: ["JavaScript", "HTML", "Python", "CSS"],
        correctOption: ["JavaScript", "Python"],
        type: "multiple"
    }),

    new Questions({
        id: 3,
        text: "React is a ___?",
        options: ["Library", "Programming Language", "Database", "Compiler"],
        correctOption: "Library",
        type: "single"
    })
];


class Quiz {
    constructor({ questions, duration }) {
        this.questions = questions;
        this.duration = duration;
        this.userResponse = {};
        this.score = 0;
        this.currentQuesIndex = 0;

    }
    start() {
        this.startTimer();
        this.currentQuestion();
    }
    displayOptions(idx) {
        //    const idx=this.currentQuesIndex;
        const optionUl = document.querySelector("ul");
        const options = this.questions[idx].options
        optionUl.innerHTML = options.map((option,index) =>
          {
            return   `
                    <li data-option-idx${index}>${option}</li>
                  
       `
          }

        ).join("")
    }
    currentQuestion() {
        const idx = this.currentQuesIndex;
        const questionTextElement = document.querySelector("p");
        questionTextElement.textContent = this.questions[idx].text;

        this.displayOptions(idx)


    }
    prevQuestion() {
        if (this.currentQuesIndex == 0) {
            return
        }
        if(this.currentQuesIndex==this.questions.length-1){
            const nextButton=document.querySelector(".buttons").lastElementChild;
            nextButton.textContent="Next"
        }
        this.currentQuesIndex--;
        this.currentQuestion();

    }
    nextQuestion() {
      if(this.currentQuesIndex==this.questions.length-2){
        const nextButton=document.querySelector(".buttons").lastElementChild;
        nextButton.textContent="submit"
      }
      this.currentQuesIndex++;
      this.currentQuestion();
    }
    calculateScore() {

        const qIdx=this.currentQuesIndex;
        for(let key in this.userResponse){
            const optionIdx=this.userResponse[questionIdx];
            const correctOption=this.questions[qIdx].correctOption;
            if(correctOption===optionIdx)this.score++
        }


    }
    captureUserResponse(userSelectedOptionIdx) {
        const qIdx=this.currentQuesIndex;
        this.userResponse[qIdx]=userSelectedOptionIdx
    }
    startTimer() {
        const timerElement=document.querySelector(".timer");
        

    }
}

const quiz = new Quiz({ questions, duration: 10 });
quiz.start();


const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];

options.addEventListener("click", () => {
  if(e.target.matches("li")){
    const optionIdx=Number(e.target.datasett.optionIdx)
    quiz.captureUserResponse(optionIdx)
  }

});
prevButton.addEventListener("click", () => {
    quiz.prevQuestion();

});
nextButton.addEventListener("click", () => {
    quiz.nextQuestion()

})