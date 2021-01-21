import { indexOf } from "lodash";

const TRIVIA_CONTAINER = document.getElementById("questions-container");



class Trivia {
    constructor(questions) {
        this.questions = questions;
        console.log(this.questions, "testing")
        this.currentQuestionIndex = 0
    }



    buildTrivia(questionObject) {

        console.log(questionObject.question, "receiving the question Object");
 
            const questionContainer = document.createElement("div");
            const answersContainer = document.createElement("ul");
            const buttonsContainer = document.createElement("div");
            const submitButton = document.createElement("button");
            const nextButton = document.createElement("button");


            questionContainer.classList.add("d-flex", "justify-content-center");
            questionContainer.innerHTML = this.questions[this.currentQuestionIndex].question
            answersContainer.classList.add("list-group", "mt-3");
            answersContainer.setAttribute("id", "answersContainer");
            buttonsContainer.classList.add("row", "d-flex", "justify-content-center");
            submitButton.classList.add("btn", "btn-primary", "submitButton", "mr-3");
            submitButton.innerHTML = "Submit";
            nextButton.classList.add("btn", "btn-success", "nextButton");
            nextButton.setAttribute("id", "nextButton");
            nextButton.innerHTML = "Next";
            nextButton.addEventListener("click", () => {  //Important! Arrow function: the binding of 'this' will default to the parent scope
                TRIVIA_CONTAINER.innerHTML = '';
                console.log(this.currentQuestionIndex)
                this.currentQuestionIndex++   
                console.log(this.currentQuestionIndex)
                this.buildTrivia(this.questions[this.currentQuestionIndex].question)
                console.log(this.questions[this.currentQuestionIndex].question, "testing next")
            })
  

            let answers = [...this.questions[this.currentQuestionIndex].incorrect_answers, this.questions[this.currentQuestionIndex].correct_answer]
            console.log(...this.questions[this.currentQuestionIndex].incorrect_answers, "wrong", this.questions[this.currentQuestionIndex].correct_answer, "right")
            let shuffledAnswers = _.shuffle(answers)
            console.log(shuffledAnswers, "shuffled")
            
           
            let answerList = []
            for (let a in shuffledAnswers) {
                answerList = document.createElement('li');
                answerList.id = shuffledAnswers[a];
                answerList.classList.add("list-group-item", "text-center");
                answerList.innerHTML = shuffledAnswers[a];
                answerList.addEventListener("click", (index) => {
                    this.checkIndex(index)
                })
               
                // var indexOfSelectedAnswer = document.getElementById("answersContainer");
                // (function(index) {
                //     indexOfSelectedAnswer.children[a].onclick = function() {
                //         index
                //         console.log(index)
                //     }
                // })
                

                answersContainer.append(answerList);
                TRIVIA_CONTAINER.append(questionContainer);
                TRIVIA_CONTAINER.append(answersContainer);
            }


            buttonsContainer.append(submitButton);
            buttonsContainer.append(nextButton);
            TRIVIA_CONTAINER.append(buttonsContainer);
            answersContainer.append(answerList); //if disabled all questions are shown 
          
        
    }

    checkIndex(index) {
        this.selectedIndex = indexOf(index.target)
    console.log(index)

    // Array.from(answerList).indexOf(index.target)
    // console.log(answerList, "lista de respuestas")
    //    console.log( Array.from(answerList).indexOf(index.target))
    // function checkIndex(event) {
    //     Array.from(answerList).indexOf(event.target)
    //  console.log(answerList, "lista de respuestas")
    //     console.log( Array.from(answerList).indexOf(event.target))
    // }
    }

}

export default Trivia;