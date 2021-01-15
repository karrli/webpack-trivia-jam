const TRIVIA_CONTAINER = document.getElementById("questions-container");
const NEXT_QUESTION= document.getElementById("submitButton");

class Trivia {
    constructor(questions) {
        this.questions = questions;
        console.log(this.questions, "testing")
        //    this.questions.incorrect_answers = incorrectAnswers
        //    this.questions.correct_answers = correctAnswers
        this.index = 0
    }

    // getAnswers() {
    //     for (let i = 0; i < this.questions.length; i++) {
    //         let answers = [...this.questions[i].incorrect_answers, this.questions[i].correct_answer]
    //         // answers.push(this.questions[i].correct_answer)

    //         return answers, console.log(answers, "answers array test")

    //     }
    // }

    buildTrivia() {

        console.log(this.questions, "hola");
        for (let i = 0; i < this.questions.length; i++) {
            const questionContainer = document.createElement("div");
            const answersContainer = document.createElement("ul");
            const buttonsContainer = document.createElement("div");
            const submitButton = document.createElement("button");
            const nextButton = document.createElement("button");
            // const answerList = document.createElement("li");

            questionContainer.classList.add("d-flex", "justify-content-center");
            questionContainer.innerHTML = this.questions[i].question
            console.log(this.questions[i].question)
            answersContainer.classList.add("list-group", "mt-3");
            buttonsContainer.classList.add("row", "d-flex", "justify-content-center");
            submitButton.classList.add("btn", "btn-primary", "submitButton", "mr-3");
            submitButton.innerHTML = "Submit";
            nextButton.classList.add("btn", "btn-success", "nextButton");
            nextButton.innerHTML = "Next";
            // answerList.classList.add("list-group-item", "text-center")

            // answerList.innerHTML = this.getAnswers()

            let answers = [...this.questions[i].incorrect_answers, this.questions[i].correct_answer]
            console.log(this.questions[i].incorrect_answers, "wrong", this.questions[i].correct_answer, "right")
            let shuffledAnswers = _.shuffle(answers)
            // answers.push(this.questions[i].correct_answer)
            // return answers.map((answer) =>{answerList.innerHTML = answer, console.log(answerList.innerHTML = answer, "answers array")}) 
            for (let a in shuffledAnswers) {
                let answerList = document.createElement('li');
                answerList.id = shuffledAnswers[a];
                answerList.classList.add("list-group-item", "text-center");
                answerList.innerHTML = shuffledAnswers[a];
                // document.body.appendChild(answerList);

                answersContainer.append(answerList);
                TRIVIA_CONTAINER.append(questionContainer);
                TRIVIA_CONTAINER.append(answersContainer);
            }
            buttonsContainer.append(submitButton);
            buttonsContainer.append(nextButton);
            TRIVIA_CONTAINER.append(buttonsContainer);
            answersContainer.append(answerList); //if disabled all questions are shown 
            // TRIVIA_CONTAINER.append(questionContainer);
            // TRIVIA_CONTAINER.append(answersContainer);
        }
    }

    //tried adding Next Button
    Next() {
        TRIVIA_CONTAINER.innerHTML = '';
        NEXT_QUESTION.addEventListener("click", function () {
        this.buildTrivia(this.questions[i++].question)
        console.log(this.questions[i++].question, "testing next")
    })
    }

}

export default Trivia;